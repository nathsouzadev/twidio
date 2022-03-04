import { SavePostService } from './SavePostService'
import { getMockPost } from '../__mocks__/getMockPost'
import mockConnection from '../__mocks__/mockConnection'

jest.mock('../repositories/PostRepository')

const postRepositoryMock = require('../repositories/PostRepository')

describe('SavePostService', () => {
  let savePostService
  const mockPost = getMockPost()

  beforeEach(async () => {
    await mockConnection.create()

    postRepositoryMock.save = jest.fn().mockImplementation(() => Promise.resolve(mockPost))

    savePostService = new SavePostService({
      postRepository: postRepositoryMock,
      author: mockPost.author,
      content: mockPost.content
    })
  })

  afterEach(async () => {
    await mockConnection.close()
  })

  it('Create a new Post and return', async () => {
    const newPost = await savePostService.execute()

    expect(postRepositoryMock.save).toHaveBeenCalled()
    expect(newPost).toMatchObject(mockPost)
  })
})
