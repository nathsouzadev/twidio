import { v4 as uuid } from 'uuid'
import { Post } from '../entities/Post'

export const getMockPost = (): Post => ({
  post_id: uuid(),
  author: 'author@email.com',
  content: 'Some content twit'
})
