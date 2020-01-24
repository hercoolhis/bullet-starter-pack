const AuthService = require("../../services/auth"),
{ validationResult } = require("express-validator"),
{ SignUp } = new AuthService();


const userSignUp = async (req, res) => {

    const errors = validationResult(req);    

    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    }
    
    let createdUser = await SignUp(req.body);
    
    res.status(201).json(createdUser);
}

module.exports = {
    userSignUp
}