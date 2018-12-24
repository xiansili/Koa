const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');


router.post('/registUser', async (ctx) => {
    const User = mongoose.model('User');

    let newUser = new User(ctx.request.body);
    await newUser.save().then(()=>{
        ctx.body = {
            code:200,
            message: '注册成功'
        }
    });
    console.log('先思力你快成功了');
    ctx.body = "先思力你快成功了";
}); 

module.exports = router;