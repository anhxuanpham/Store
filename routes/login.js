const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email: email });

        if (!user) {

            return res.status(404).render('error', { message: 'User not found' });
        }

        if (user.password === password) {

            res.render('error', { message: 'Login successful!', user: user });
        } else {

            res.status(401).render('error', { message: 'Incorrect password' });
        }
    } catch (err) {

        res.status(500).render('error', { message: err.message });
    }
});

module.exports = router;
