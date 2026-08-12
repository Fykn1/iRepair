import { Router } from 'express'
import { AuthController } from './auth.controller'
import { authMiddleware } from '../../middlewares/auth.middleware'

const authRoutes = Router()
const authController = new AuthController()

authRoutes.use(authMiddleware)

authRoutes.post('/register', authController.register.bind(authController))
authRoutes.post('/login',    authController.login.bind(authController))
authRoutes.post('/logout',   authController.logout.bind(authController))

export { authRoutes }