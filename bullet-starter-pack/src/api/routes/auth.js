const { checkIfUserExists } = require("../middlewares/user"),
{ Router } = require("express"),
authController = require("../controllers/authController"),

route = Router();



module.exports = (app) => {
    app.use('/auth', route);

    //signup route ...validate request first
    route.post('/signup', [checkIfUserExists], authController.userSignUp);

    //signin route
    
}