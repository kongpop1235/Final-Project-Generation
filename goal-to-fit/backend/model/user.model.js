const mongoose = require('mongoose'); // import mongoose

const Schema = mongoose.Schema; // import Schema

// สร้าง Schema ใหม่ เก็บในตัวแปรชื่อตาม model ที่จะสร้าง
// วิธีสร้างมี 2 แบบ(เท่าที่รู้) ทั้ง 2 แบบจะเป็น object {key:value}
// แบบแรก {
//    username: String,
//    password: String,
// }
// แบบสอง {
//    username: {
//        type: String,
//        required: true, validate ว่าต้องมีการกรอก username ถ้าไม่มี จะ error
//        unique: true, validate ที่ mongoDB ว่า ชื่อ username จะต้อง มีชื่อเดียว ห้ามซ้ำ ถ้าซ้ำจะ error
//        default: (รับค่าเป็น string) เป็นค่ากำหนด default ถ้า username ไม่ถูกตั้ง จะใช้ชื่อใน default แทน
//    }
// }
// timestamps: true argument ตัวที่สอง ของ new Schema (ตัวแรกคือ {object} ที่รับค่า) คือ จะสร้างเวลา ของแต่ละ object ที่ถูกสร้างขึ้นและ แก้ไข


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    goal: String,
    achievement: {
        walk: { type: Number, default: "0" },
        run: { type: Number, default: "0" },
        Bikking: { type: Number, default: "0" },
    },
    setDayAndTime: Object,
    last_activityAndDuration: Object,
    setsActivities: Object,
    packActivity: Object
}, {
    timestamps: true,
});

// ใช้ method .model() ของ mongoose ส่ง Schema นี้ ไปที่ collection ที่กำหนด ในที่นี้คือ User
// ถ้าถามว่ารู้ database ได้จากไหน นั้นคือ String ตอนที่สร้าง .env เรากำหนด project name กับ database name ไว้แล้ว
const User = mongoose.model('User', userSchema);
module.exports = User; // export เพื่อเอาไปใช้