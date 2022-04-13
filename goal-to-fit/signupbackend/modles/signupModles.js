const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }//จะทำการบันทึกวันที่ที่ผู้ใช้งานลงทะเบียนโดยอัตโนมัติ
})

module.exports = mongoose.model('mytable', signUpTemplate);