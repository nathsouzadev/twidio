import { getCustomRepository } from 'typeorm'
import { Post } from '../entities/Post'
import { PostRepository } from '../repositories/PostRepository'

export class GetAllPostService {
    private postRepository: PostRepository

    constructor (postRepository: PostRepository = getCustomRepository(PostRepository)) {
      this.postRepository = postRepository
    }

    async execute (): Promise<Post[]> {
      const posts: Post[] = await this.postRepository.getAll()
      return posts
    }
}
