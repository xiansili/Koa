
//引入路由
const Router = require("koa-router");
//实例化路由对象
let router = new Router();
//引入mongoose
const mongoose = require("mongoose");
const db = "mongodb://localhost/pw";




router.post("/registUser", async ctx => {
  // 获取model

  
  const User = mongoose.model("User");
  // 接收post请求封装成user对象
  let newUser = new User(ctx.request.body);
  // 使用save保存用户信息
  await newUser
    .save()
    .then(() => {
      ctx.body = {
        code: 200,
        message: "注册成功"
      };
    })
    .catch(err => {
      ctx.body = {
        code: 500,
        message: err
      };
      
    });
});

router.get("/registUser", async ctx => {
  // 获取model
  const User = mongoose.model("User");

  await User.find()
    .exec()
    .then(res => {
      ctx.body = res;
    });
});
module.exports = router;
