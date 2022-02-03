import { Post } from '../entities/Post'
import getManagerMock from '../__mocks__/getEntityManagerMock'
import { getMockContentList } from '../__mocks__/mockContentList'
import { PostRepository } from './PostRepository'

describe('PostRepository', () => {
  const mockPostList: Post[] = getMockContentList()

  it('should call getAll method and return all players', async () => {
    const managerMock = await getManagerMock({
      findReturn: mockPostList
    })

    const postRepository = new PostRepository(managerMock)

    const result = await postRepository.getAll()

    expect(managerMock.find).toHaveBeenCalled()
    expect(result).toMatchObject(mockPostList)
  })
})
