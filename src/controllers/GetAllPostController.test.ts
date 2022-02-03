import { Post } from '../entities/Post'
import { getMockContentList } from '../__mocks__/mockContentList'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { GetAllPostController } from './GetAllPostController'

let mockExecute = jest.fn()

jest.mock('../services/GetAllPostService', () => {
  return {
    GetAllPostService: jest.fn().mockImplementation(() => {
      return {
        execute: mockExecute
      }
    })
  }
}
)

describe('GetAllPostController', () => {
  it('Should return status 200 and a empty array when does not have posts', async () => {
    mockExecute = jest.fn().mockResolvedValue([])

    const getAllPostController = new GetAllPostController()

    const request = makeMockRequest({})
    const response = makeMockResponse()

    await getAllPostController.handle(request, response)

    expect(mockExecute).toBeCalled()
    expect(response.state.status).toBe(200)
    expect(response.state.json).toMatchObject([])
  })

  it('Should return status 200 and all players in database', async () => {
    const mockPostList: Post[] = getMockContentList()
    mockExecute = jest.fn().mockResolvedValueOnce(mockPostList)

    const getAllPostController = new GetAllPostController()

    const request = makeMockRequest({})
    const response = makeMockResponse()

    await getAllPostController.handle(request, response)

    expect(response.state.status).toBe(200)
    expect(response.state.json).toMatchObject(mockPostList)
  })

  it('Should return status 500 when have error server', async () => {
    mockExecute = jest.fn().mockImplementation(() => {
      throw new Error()
    })

    const getAllPostController = new GetAllPostController()

    const request = makeMockRequest({})
    const response = makeMockResponse()

    await getAllPostController.handle(request, response)

    expect(mockExecute).toBeCalled()
    expect(response.state.status).toBe(500)
    expect(response.state.json).toMatchObject({ message: 'Error' })
  })
})
