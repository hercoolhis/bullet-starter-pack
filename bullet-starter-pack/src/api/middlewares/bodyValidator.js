const { check } = require("express-validator");

const checkSignUp = () => {
    return [
        check('name').exists().isLength({min: 5}).trim().escape().withMessage('Name must have more than 5 characters'),
        check('email').not().isEmpty().isEmail().withMessage('your email is not valid'),
        check('password').not().isEmpty().isLength({ min: 6 }).withMessage("password must be at least 6 characters")
    ]
}

module.exports = {
    checkSignUp
}