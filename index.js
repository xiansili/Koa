const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
    ctx.body = 'hello word'
});

app.listen(3000, () => {
 console.log( "开启");
  
});

//加载路由
const Router = requier('koa-router');
let user = require('./controller/user.js');
let router = new Router();

router.use('./user', user.routes());

app.use(router.routes());
app.use(router.allowedMethods());





const {connect , initSchemas} = require('./init.js');
(async ()=>{
 await connect();
 initSchemas();
})();


