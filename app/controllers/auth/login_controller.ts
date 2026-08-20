import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class LoginController {
  async show({ view }: HttpContext) {
    return view.render('pages/login')
  }

  async store({ request, response, auth, session }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const user = await User.verifyCredentials(email, password)

      await auth.use('web').login(user)

      return response.redirect('/dashboard')
    } catch {
      session.flash('errors', {
        form: 'Email atau password salah.',
      })

      return response.redirect('/login')
    }
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/login')
  }
}
