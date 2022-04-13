const express = require('express'); // สร้างตัวแปรเก็บ express
const User = require('../model/user.model'); // ไฟล์ Schema ของ user (ข้ามก่อนได้ ถ้ายังไม่มี Schema)

const userRouter = express.Router(); // สร้าง router ของ register

// CRUD API EXPRESS
// เนื่องจากเป็นการ สร้าง user ใหม่เลยใช้ method post และ path /add (หรือ path ชื่ออื่นๆ)
userRouter.post('/add', (req, res, next) => {
    // req.body หมายความว่า ให้รับข้อมูล สิ่งที่ react ส่งผ่าน registerRouter ผ่านมาทาง path /add
    // ในทีนี้ คือ ข้อมูลจาก form ส่งมาเป็น object
    const data = req.body;

    // สร้าง User ใหม่ เข้าไปที่ collection ที่กำหนด ผ่าน Schema เก็บไว้ในตัวแปร newUser
    const newUser = new User(data);

    // user ใหม่ที่สร้าง ใช้ method .save() method ของ mongoose ในการ save ข้อมูลไปที่ database/collection
    newUser.save()
        .then(() => res.json("Your register completed !! you account is ready")) // then ถ้า สำเร็จ
        .catch(err => res.status(400).json("Error:" + err)); // catch ถ้า มี error
});

userRouter.get('/', (req, res) => {
    User.find().then(res => console.log(res.data));
})

module.exports = userRouter;  // export Router ไปที่ไฟล์ server.js