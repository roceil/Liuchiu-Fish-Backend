import { successHandler } from "~~/utils/successHandler";
import { errorHandler } from "~~/utils/errorHandler";


export default eventHandler(async(event) => {
try {
  const user = event.context.user


  return successHandler(200, '使用者已新增',user)
} catch (error) {
  console.error("【Server Error】", error)

  return errorHandler(event,500,'Internal Server Error')
}
});
