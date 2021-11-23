const User = require('../Models/userModel');
const verifyUser = require('../utils/verifyUser');

exports.createUser = async(req, res, next) => {
    const user = new User ({
        email: req.body.email,
        displayName: req.body.username,
        password: req.body.password
    })
    await user.save();
    const emailVerifyURL = `${req.protocol}://${req.get("host")}/verify-email/${user._id}`;
    const message = `Your password reset token is provided below :- \n\n ${emailVerifyURL} \n\n if you have not requested this email, kindly ignore.`
    verifyUser(user, message, res);
};

exports.verifyEmail = async(req, res, next) => {
    const user = await User.findById(req.params.id);

    user.isVerified = true;

    await user.save();

    res.status(200).json({
        status: "success",
        user
    })
}