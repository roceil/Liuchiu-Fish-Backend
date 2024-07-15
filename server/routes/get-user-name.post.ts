export default eventHandler((event) => {
  const user = event.context.user

  const resData = {
    status: 'success',
    data:{
      user
    }
  }
  return resData
});
