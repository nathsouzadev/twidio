import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:5001'
})

describe('/posts', () => {
  it('Should return status 200 and list of players', async () => {
    const expectedResponse = [
      {
        post_id: 'b0f3d72a-b8a9-45ec-a8f0-a14f65f3597d',
        author: 'some@email.dio',
        content: 'Some tuit about that'
      },
      {
        post_id: '11f8ad35-c86c-49dc-9c8b-ef31cb1e758f',
        author: 'user@dio.me',
        content: 'User about DIO'
      }
    ]

    const response = await server.get('/posts')
    expect(response.status).toBe(200)
    expect(response.data).toMatchObject(expectedResponse)
  })
})
