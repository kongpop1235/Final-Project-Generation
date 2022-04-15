const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
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
    },//จะทำการบันทึกวันที่ที่ผู้ใช้งานลงทะเบียนโดยอัตโนมัติ
    calories_goal: {
        type: Number,
    },
    activity: {
        walk: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        run: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        bikking: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        swimming: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        pushups: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        hulaHoop: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        boxing: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        badminton: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        yoga: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        weight: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        },
        bickycle: {
            show: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: '0'
            }
        }
    }
})

module.exports = mongoose.model('users', signUpTemplate);