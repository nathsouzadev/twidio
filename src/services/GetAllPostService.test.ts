import mockConnection from '../__mocks__/mockConnection'
import { Post } from '../entities/Post'
import { getMockContentList } from '../__mocks__/mockContentList'
import { GetAllPostService } from './GetAllPostService'

jest.mock('../repositories/PostRepository')

const postRepositoryMock = require('../repositories/PostRepository')
const getAllPostService = new GetAllPostService(postRepositoryMock)

describe('GetAllPostService', () => {
  const mockPostList: Post[] = getMockContentList()

  beforeEach(async () => {
    await mockConnection.create()
    postRepositoryMock.getAll = jest.fn()
      .mockImplementation(() => Promise.resolve(mockPostList))
  })

  afterEach(async () => {
    await mockConnection.close()
  })
  it('get all posts', async () => {
    const posts = await getAllPostService.execute()

    expect(postRepositoryMock.getAll).toHaveBeenCalled()
    expect(posts).toMatchObject(mockPostList)
  })
})
