import { Post } from '../entities/Post'
import getManagerMock from '../__mocks__/getEntityManagerMock'
import { getMockPost } from '../__mocks__/getMockPost'
import { getMockContentList } from '../__mocks__/mockContentList'
import { PostRepository } from './PostRepository'

describe('PostRepository', () => {
  const mockPostList: Post[] = getMockContentList()

  it('should call getAll method and return all posts', async () => {
    const managerMock = await getManagerMock({
      findReturn: mockPostList
    })

    const postRepository = new PostRepository(managerMock)

    const result = await postRepository.getAll()

    expect(managerMock.find).toHaveBeenCalled()
    expect(result).toMatchObject(mockPostList)
  })

  it('should call save method and return new post', async () => {
    const mockPost = getMockPost()

    const managerMock = await getManagerMock({
      saveReturn: mockPost
    })

    const postRepository = new PostRepository(managerMock)

    const result = await postRepository.save(mockPost)

    expect(managerMock.save).toHaveBeenCalled()
    expect(result).toMatchObject(mockPost)
  })
})
