import { Request, Response } from 'express'
import { GetAllPostService } from '../services/GetAllPostService'

export class GetAllPostController {
  async handle (request: Request, response: Response): Promise<Response> {
    const getAllPostService = new GetAllPostService()

    try {
      const posts = await getAllPostService.execute()
      return response.status(200).json(posts)
    } catch (error) {
      return response.status(500).json({ message: 'Error' })
    }
  }
}
