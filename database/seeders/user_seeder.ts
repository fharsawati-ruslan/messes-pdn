import User from '#models/user'

export default class UserSeeder {
  async run() {
    const email = 'admin@messkso.id'

    const existingUser = await User.findBy('email', email)

    if (existingUser) {
      existingUser.role = 'super_admin'
      await existingUser.save()

      console.log('Admin user already exists - role updated to super_admin')
      return
    }

    await User.create({
      fullName: 'Administrator MESS KSO',
      email,
      password: 'Admin@12345',
      role: 'super_admin',
    })

    console.log('Super Admin user created successfully')
  }
}
