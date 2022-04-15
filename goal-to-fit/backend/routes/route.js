const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');
const { deleteOne } = require("../modles/signupModles");

router.get('/login', (req, res) => {
    signUpTemplateCopy.findOne({ username: req.body.username })
        .then(data => {
            res.send(data);
            bcrypt.compare(req.body.password, data.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    // res.send(check);
                    // res.send(data);
                } else {
                    res.status(401).send("error 401");
                }
            })
        })
        .catch(error => {
            res.json(error);
        })
})

router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        username: req.body.username,
        phone: req.body.phone,
        password: securePassword
    })
    signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

// router.get('/signin')
module.exports = router