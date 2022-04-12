const express = require('express');
const router = express.Router();
const users = require("./data");
const uuid = require('uuid');


router.get("/", (req, res) => res.json(users));

//Get Single User
router.get("/:id", (req, res) => {
    let found = users.some(user => user.id == req.params.id);
    if (found) {
        res.json(users.filter(user => user.id == req.params.id));
    } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
    }
});

//Create User
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ msg: `Please include a name and email` });
    }

    users.push(newUser);
    res.json(users);
});

//Update User
router.put('/:id', (req, res) => {
    let found = users.some(user => user.id == req.params.id);
    if (found) {
        const updUser = req.body;
        users.forEach(user => {
            if (user.id == req.params.id) {
                user.name = updUser.name ? updUser.name : user.name;
                user.email = updUser.email ? updUser.email : user.email;

                res.json({ msg: `User update`, user })
            } else {
                res.status(404).json({ msg: `No user with the id of ${req.params.id}` })
            }
        })
    }
})

//delete User
router.delete('/:id', (req, res) => {
    let found = users.some(user => user.id == req.params.id);

    if (found) {
        res.json({
            msg: `Delate User ${req.params.id}`,
            users: users.filter(user => user.id != req.params.id)
        });
    } else {
        res.status(404).json({ msg: `No User of ${req.params.id}` });
    }
})

module.exports = router;