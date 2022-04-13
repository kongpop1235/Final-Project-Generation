const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles')

router.post('/signup', (req, res) => {
    const signedUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        phone:req.body.phone,
        password:req.body.password
    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.get('/signin')
module.exports = router