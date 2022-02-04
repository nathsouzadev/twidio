import { createConnection, getConnection } from 'typeorm'

const mockConnection = {
  async create () {
    return await createConnection({
      name: 'test',
      type: 'sqlite',
      database: './src/__mocks__/database.test.sqlite'
    })
  },

  get () {
    return getConnection('test')
  },

  async close () {
    await getConnection('test').close()
  }
}

export default mockConnection
