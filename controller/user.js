const Router = require('koa-router');
let router = new Router();
const mongoose = requier('mongooose');


router.post('/registUser', async (ctx) => {
    const User = mongoose.model('user');
})