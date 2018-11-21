const Koa = require('koa');
const axios = require('axios');
const app = new Koa();
// logger
app.use(async (ctx, next) => {
   await next();
});
// x-res
app.use (async (ctx, next) =>{
   await next();
});
// response
app.use(async (ctx, next) => {
  await next();
 // ctx.body = 'hello world'
});
app.use(async (ctx, next) => {
  /*if (ctx.url === '/getUser') {
    await axios.get('http://webapi.soydai.cn:3499/apitest/assets/common/getUser').then((response) => {
      console.log('response',response.data);
      ctx.response.body = response.data;
    })

    // next();
  }*/
  ctx.response.body = 'zhoooo'
})
app.listen(22);