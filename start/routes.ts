import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')
const DashboardController = () => import('#controllers/dashboard_controller')

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

router.get('/login', [AuthController, 'showLogin'])

router.post('/login', [AuthController, 'login'])

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router
  .group(() => {
    router.post('/logout', [AuthController, 'logout'])

    router.get('/dashboard', [DashboardController, 'index'])
  })
  .use(middleware.auth())

/*
|--------------------------------------------------------------------------
| Root
|--------------------------------------------------------------------------
*/

router.get('/', ({ response }) => {
  return response.redirect('/dashboard')
})
