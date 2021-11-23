const express = require('express');
const { createUser, verifyEmail } = require('../Controllers/userController');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard page');
});
router.get('/login', (req, res) => {
    res.render('login');
});

router.route('/signup').post(createUser);
router.route('/verify-email/:id').get(verifyEmail);

module.exports = router;