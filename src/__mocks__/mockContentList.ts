import { v4 as uuid } from 'uuid'
import { Post } from '../entities/Post'

export const getMockContentList = (): Post[] => ([
  {
    post_id: uuid(),
    author: 'author@email.com',
    content: 'Some content twit'
  },
  {
    post_id: uuid(),
    author: 'other@author.net',
    content: 'Other content twit'
  }
])
