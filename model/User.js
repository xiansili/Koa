//model层（就是和数据库打交道的）
const mongoose = require('mongoose');

//定义数据模型，并引入
const Schema = mongoose.Schema;

//数据类型

const userSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userName: { unique: true, type: String },
    password: String,
    createDate: { type: Date, default: Date.now() },
    userContent: String 
});

// 发布模型
mongoose.model('User', userSchema);