const User = require('../Models/userModel');
const verifyUser = require('../utils/verifyUser');

exports.createUser = async(req, res, next) => {
    const user = new User ({
        email: req.body.email,
        displayName: req.body.username,
        password: req.body.password
    })
    await user.save();
    verifyUser(user, 'this is the test email', res);
}