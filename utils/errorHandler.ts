import { H3Event, createError, sendError } from 'h3'

export const errorHandler = (
  event: H3Event, 
  statusCode: number, 
  message: string
): void => {
  const error = createError({
    statusCode,
    statusMessage: statusCode === 500 ? 'Internal Server Error' : 'Error',
    data: {
      success: false,
      message: message || 'An unexpected error occurred'
    }
  })

  sendError(event, error)
}