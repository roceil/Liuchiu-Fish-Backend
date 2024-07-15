import { readBody, createError, sendError } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    // 檢查是否是 POST, PUT, 或 PATCH 請求
    if (!['POST', 'PUT', 'PATCH'].includes(event.node.req.method)) {
      return // 如果不是，直接返回，不處理 body
    }

    const body = await readBody(event)
    const { userName } = body

    if (!userName) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        data: { message: 'userName is required.' }
      })
    }

    event.context.user = userName

    // 如果一切正常，你可以選擇不返回任何內容，或者返回一個成功的 JSON 響應
    return { success: true, message: 'User context set successfully' }

  } catch (error) {
    console.error("Error processing request:", error)

    // 使用 sendError 函數返回 JSON 格式的錯誤響應
    return sendError(event, createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Internal Server Error',
      data: {
        message: error.data?.message || error.message || 'An unexpected error occurred'
      }
    }))
  }
})