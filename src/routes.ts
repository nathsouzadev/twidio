import { Router } from 'express'
import { MessageController } from './controllers/MessageController'
import { GetAllPostController } from './controllers/GetAllPostController'

const router = Router()

const messageController = new MessageController()
const getAllPostController = new GetAllPostController()

router.get('/', messageController.handle)
router.get('/posts', getAllPostController.handle)

export { router }
