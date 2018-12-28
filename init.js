const mongoose = require('mongoose');
const db = 'mongodb://localhost/pw';


//引用schema
const glob = require('glob');
const path = require('path');
//初始化
exports.initSchemas = () => {
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require);
};


exports.connect = () => {
    //连接数据库
    mongoose.connect(db, {useNewUrlParser: true});
    //解析地址

    mongoose.connection.once('open', ()=>{
        console.log('数据库连接成功')
    });
};