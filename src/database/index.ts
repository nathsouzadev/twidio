import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()
  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.TEST === 'test'
        ? './src/database/database.test.sqlite'
        : defaultOptions.database
    })
  )
}
