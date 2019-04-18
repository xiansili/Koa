// const Koa = require('koa');
// const app = new Koa();

// //解决跨域问题
// const cors = require('koa2-cors');
// app.use(cors({
//     origin:['http://localhost:8082'],
//     credentials:true

// }));
// //接收前端post请求
// const bodyParser = require('koa-bodyparser');
// app.use(bodyParser());





// //加载路由
// const Router = require('koa-router');
// let user = require('./controller/user.js');
// let router = new Router();

// router.use('/user', user.routes());

// app.use(router.routes());
// app.use(router.allowedMethods());



// //先连接，再初始化，异步操作（async()=>{await}）
// const {connect , initSchemas} = require('./init.js');
// (async ()=>{
//  await connect();
//  initSchemas();
// })();

// app.use(async ctx =>{
//     ctx.body = '是我吗？'
    
// });

// app.listen(4000, () => {
//  console.log( "开启");
  
// });

const Koa = require('koa');
const app = new Koa();

//异步操作
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, ()=>{
    console.log('3000')
});