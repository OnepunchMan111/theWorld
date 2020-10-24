const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err,'数据库连接失败'))
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    hobbies:[String]
});
const User = mongoose.model('User',userSchema);
/*User.create({name:'zs',age:23,email:'136@qq.com',password:123,hobbies:["打篮球","打皮球"]},(err,result) =>{
    console.log(err)
    console.log(result)
})
User.create({name:'ls',age:23,email:'136@qq.com',password:123,hobbies:["打篮球","打皮球"]},(err,result) =>{
    console.log(err)
    console.log(result)
})*/
/*User.find().then(result => console.log(result));*/
User.updateOne({name:'ls'},{name:'李狗蛋'}).then(result => console.log(result))
