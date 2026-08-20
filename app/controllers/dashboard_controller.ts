import type { HttpContext } from '@adonisjs/core/http'


export default class DashboardController {

  async index({
    view,
    auth,
  }: HttpContext) {

    const user = auth.getUserOrFail()


    return view.render(
      'pages/home',
      {
        user,
      }
    )
  }

}
