import { EntityRepository, EntityManager } from 'typeorm'
import { Post } from '../entities/Post'

@EntityRepository(Post)
export class PostRepository {
    private manager: EntityManager;

    constructor (manager: EntityManager) {
      this.manager = manager
    }

    getAll = async (): Promise<Array<Post>> => {
      const posts: Post[] = await this.manager.find(Post)
      return posts
    }
}
