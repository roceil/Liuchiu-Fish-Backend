import { H3Error, readBody, sendError } from 'h3'
import { errorHandler } from '~~/utils/errorHandler'

export default defineEventHandler(async (event) => {
  try {
    if (!getRequestURL(event).pathname.startsWith('/auth')) {
      return
    }

    const body = await readBody(event)

    event.context.user = body.userName
  }
  catch (error) {
    if (error instanceof H3Error) {
      return sendError(event, error)
    }

    // 對於其他未預期的錯誤，我們將其視為不可控錯誤
    console.error('【Uncontrolled Server Error】', error)
    return errorHandler(event, 500, error.message)
  }
})
