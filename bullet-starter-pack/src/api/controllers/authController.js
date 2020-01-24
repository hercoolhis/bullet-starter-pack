const AuthService = require("../../services/auth"),
{ SignUp } = new AuthService();


const userSignUp = async (req, res) => {
    
    let createdUser = await SignUp(req.body);
    
    res.status(201).json(createdUser);
}

module.exports = {
    userSignUp
}