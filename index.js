const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
    ctx.body = 'hello word'
});

app.listen(3000, () => {
 console.log( "开启");
  
});

const {connect} = require('./init.js');
connect();