// const greet = function(){
//     console.log("hello world")
// }

// greet()

//  const color= require('cli-color')
// console.log(color.red('hello'))
// (function (name){

// console.log(name)
// })('rao')


//Local module
// const register=require('./auth')

// const auth =require('./auth')
// register('Rao')

// auth.register('A.Moiz')
// auth.login("ABC",'dsadas')


//Core Module
// const path=require('path')

//dirname .dirname,  file name .basename, extension .extname, parse .parse, join .join,
// console.log('Folder name',path.dirname(__filename))


//Events Module

// const Emitter=require('events')

// const myEmitter= new Emitter()

// myEmitter.on('someone',(data)=>{
// console.log(data)
// })
// myEmitter.emit('someone'),{
//     name:"Abdul Moiz"
// }



// const { EventEmitter } = require('events');

// class Auth extends EventEmitter {
//   register(username) {
//     console.log('Registration successful');
//     this.emit('registered', username);
//   }
// }
// //Listen
// const auth = new Auth();

// //Verify email
// auth.on('registered', (data) => {
//   console.log(`Sending email to ${data}`);
// });

// //Wellcome email
// auth.on('registered', (data) => {
//     console.log(`Sending welcome email to ${data}`);
//   });

// auth.register('A.Moiz');


//HTTP Module



import express from "express";
// import path from "path";

const app = express();
import path from 'path';
const pathh = path;

app.use(express.json());



app.get('/', (req, res) => {
    // res.send('<h2> Hello Express js</h2>')
 res.sendFile(pathh.join(__dirname,"public","index.html"))
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
