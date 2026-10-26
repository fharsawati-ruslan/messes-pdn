import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const OccupantsController = () => import('#controllers/occupants_controller')
const HousesController = () => import('#controllers/houses_controller')

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

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    router.get('/dashboard', [DashboardController, 'index'])

    /*
    |--------------------------------------------------------------------------
    | Penghuni
    |--------------------------------------------------------------------------
    */

    router.get('/occupants', [OccupantsController, 'index']).as('occupants.index')

    router
      .get('/occupants/create', [OccupantsController, 'create'])
      .as('occupants.create')

    router.post('/occupants', [OccupantsController, 'store']).as('occupants.store')

    router.get('/occupants/:id', [OccupantsController, 'show']).as('occupants.show')

    router
      .get('/occupants/:id/edit', [OccupantsController, 'edit'])
      .as('occupants.edit')

    router
      .post('/occupants/:id', [OccupantsController, 'update'])
      .as('occupants.update')

    router
      .post('/occupants/:id/delete', [OccupantsController, 'destroy'])
      .as('occupants.destroy')

    /*
    |--------------------------------------------------------------------------
    | Rumah Mess
    |--------------------------------------------------------------------------
    */

    router.get('/houses', [HousesController, 'index']).as('houses.index')

    router
      .get('/houses/create', [HousesController, 'create'])
      .as('houses.create')

    router.post('/houses', [HousesController, 'store']).as('houses.store')

    router.get('/houses/:id', [HousesController, 'show']).as('houses.show')

    router
      .get('/houses/:id/edit', [HousesController, 'edit'])
      .as('houses.edit')

    router
      .post('/houses/:id', [HousesController, 'update'])
      .as('houses.update')

    router
      .post('/houses/:id/delete', [HousesController, 'destroy'])
      .as('houses.destroy')
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
