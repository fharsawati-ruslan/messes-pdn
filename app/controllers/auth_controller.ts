import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async showLogin({ view }: HttpContext) {
    return view.render('pages/login')
  }

  async login({ request, response, auth, session }: HttpContext) {
    const { email, password, remember } = request.only([
      'email',
      'password',
      'remember',
    ])

    try {
      const user = await User.verifyCredentials(email, password)

      await auth.use('web').login(user, !!remember)

      return response.redirect('/dashboard')
    } catch {
      session.flash('errors', {
        email: 'Email atau password salah.',
      })

      return response.redirect('/login')
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/login')
  }
}
