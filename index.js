const Koa = require('koa');
const axios = require('axios');
const app = new Koa();
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
app.listen(2222);