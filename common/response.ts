export default (data)=>{
  return new Response(
    JSON.stringify({
      code:0,
      msg:'',
      data,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}