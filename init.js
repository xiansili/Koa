const mongoose = require('mongoose');
const db = 'mongodb://localhost';


exports.connect = () => {
    //连接数据库
    mongoose.connect(db, {useNewUrlParser: true});

    mongoose.connection.once('open', ()=>{
        console.log('123')
    })


}