import { EntityManager } from 'typeorm'

type managerMockArgs = {
  findReturn?: object | [object]
  findOneReturn?: object
  saveReturn?: object | [object]
  updateReturn?: object
  incrementReturn?: object
  decrementReturn?: object
  countReturn?: number
  deleteReturn?: object
}

const getEntityManagerMock = async ({
  findReturn = undefined,
  findOneReturn = undefined,
  saveReturn = undefined,
  updateReturn = undefined,
  incrementReturn = undefined,
  decrementReturn = undefined,
  countReturn = undefined,
  deleteReturn = undefined
}: managerMockArgs): Promise<EntityManager> => {
  const manager = new EntityManager(null)

  manager.find = jest.fn().mockImplementation(() => Promise.resolve(findReturn))
  manager.findOne = jest.fn().mockImplementation(() => Promise.resolve(findOneReturn))
  manager.save = jest.fn().mockImplementation(() => Promise.resolve(saveReturn))
  manager.update = jest.fn().mockImplementation(() => Promise.resolve(updateReturn))
  manager.increment = jest.fn().mockImplementation(() => Promise.resolve(incrementReturn))
  manager.decrement = jest.fn().mockImplementation(() => Promise.resolve(decrementReturn))
  manager.count = jest.fn().mockImplementation(() => Promise.resolve(countReturn))
  manager.delete = jest.fn().mockImplementation(() => Promise.resolve(deleteReturn))
  manager.findOneOrFail = jest.fn().mockImplementation(() => Promise.resolve(findOneReturn))
  manager.transaction = jest.fn().mockImplementation(fn => fn(manager))

  return manager
}

export default getEntityManagerMock
