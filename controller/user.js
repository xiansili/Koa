const Router = require("koa-router");
let router = new Router();
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
  
  let date = User.find((err,res)=>{
	if(err){
        // console.log(err);
        
	} else {
        // console.log(res);
        return res;
	}
})
    
    let ctx_query = ctx.query;
    let obj = {
      ctx_query,
    };
    ctx.response.body={status:200,meg:'get返回数据',data:obj};
});

module.exports = router;
