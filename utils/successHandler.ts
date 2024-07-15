export const successHandler = <T>(statusCode:number,message:string,data:T) => {
  const response = {
    statusCode,
    success: true,
    message,
    data
  }

  return response
}