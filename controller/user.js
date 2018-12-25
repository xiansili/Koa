const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');


router.post('/registUser', async (ctx) => {
    // const User = mongoose.model('User');
    // let newUser = new User(ctx.request.body);
    // await newUser.save().then(()=>{
    //     ctx.body = {
    //         code:200,
    //         message: '注册成功'
    //     }
    // });
    console.log('先思力你快成功了');
    ctx.body = "先思力你快成功了";
}); 

module.exports = router;


// const Router = require('koa-router');
// let router = new Router();
// const mongoose = require('mongoose');

// router.post('/registUser', async (ctx) => {
//     // 获取model
//     const User = mongoose.model('User');
//     // 接收post请求封装成user对象
//     let newUser = new User(ctx.request.body);
//     // 使用save保存用户信息
//     await newUser.save().then(() => {
//         ctx.body = {
//             code: 200,
//             message: '注册成功'
//         };
//     }).catch(err => {
//         ctx.body = {
//             code: 500,
//             message: err
//         };
//     });
// });
// module.exports = router;