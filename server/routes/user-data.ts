import { successHandler } from '~~/utils/successHandler'
import { errorHandler } from '~~/utils/errorHandler'

export default eventHandler(async (event) => {
  const fakeUser = {
    userName: 'test',
    age: 18,
    email: '123@gmail.com',
  }
  try {
    return successHandler(200, '使用者已驗證', fakeUser)
  }
  catch (error) {
    console.error('【Server Error】', error)

    return errorHandler(event, 500, 'Internal Server Error')
  }
})
