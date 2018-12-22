const mongoose = require('mongoose');
const db = 'mongodb://localhost/xiansili';


//引用schema
const glob = require('glob');
const path = require('path');

exports.initSchemas = () => {
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require);
};


exports.connect = () => {
    //连接数据库
    mongoose.connect(db, {useNewUrlParser: true});

    mongoose.connection.once('open', ()=>{
        console.log('123')
    });
};