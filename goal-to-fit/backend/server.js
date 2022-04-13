const express = require('express');  // ใช้สำหรับสร้าง routes ต่างๆ
const cors = require('cors');  // ใช้แก้ปัญหา cross-platform browser
const mongoose = require('mongoose');  // ใช้สำหรับเขียน syntax code mongo

require('dotenv').config();  // ใช้อ่านไฟล์ env (มั้ง)

const app = express();  // เก็บ ฟังก์ชั่น express ไว้ใน app เพื่อให้ใช้งานง่าย
const PORT = process.env.PORT || 8000;  // สร้างตัวแปรไว้เก็บ port ถ้าในไฟล์ .env มีตัวแปรชื่อ PORT จะใช้ port ใน .env port ที่สร้าง จะซ้ำกับ port frontend ไม่ได้ ตรงนี้ยัง งงๆ อยู่ ว่าถ้า deploy แล้วจะใช้ port ยังไง
const bodyParser = require('body-parser');  // ไลบราลี่ จัดการ ให้ backend ใช้อ่าน json จากการส่งค่าผ่าน body ได้

app.use(bodyParser.json());  // เรียกใช้ body-parser
app.use(bodyParser.urlencoded({extended: true}));  // เรียกใช้ body-parser

app.use(cors());  // เรียกใช้ cors
app.use(express.json());  // เรียกใช้ express.json


// Connect database mongo
const uri = process.env.connection_url;  // process.env คือ การบอกว่าจะให้อ่านไฟล์ที่ชื่อ .env และ ชื่อตัวแปร connection_url (จะเป็นชื่ออื่นก็ได้แต่ต้องตั้งให้เหมือนกัน)
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}) // เชื่อมต่อ mongo ด้วย mongoose.connect ที่ uri
const connection = mongoose.connection; // เก็บการเชื่อมต่อลงตัวแปร และเช็ค once ทุกครั้งที่ hot-reload และ log ข้อความ ถ้า เชื่อมต่อสำเร็จ
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userRouter = require('./api/users');
app.use('/user',userRouter);

app.listen(PORT,() => {
    console.log(`Server is listening to : ${PORT}`);
});
