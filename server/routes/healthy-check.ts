import { successHandler } from '~~/utils/successHandler'
import { errorHandler } from '~~/utils/errorHandler'

export default defineEventHandler(async (event) => {
  try {
    return successHandler(200, 'Server is healthy', null)
  }
  catch (error) {
    console.error('【Server Error】', error)

    return errorHandler(event, 500, 'Internal Server Error')
  }
})
