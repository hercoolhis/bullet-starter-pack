const { checkIfUserExists } = require("../middlewares/user"),
{ checkSignUp } = require("../middlewares/bodyValidator"),
{ Router } = require("express"),
{ userSignUp } = require("../controllers/authController"),
route = Router();



module.exports = (app) => {
    app.use('/auth', route);

    //signup route ...validate request body first
    route.post('/signup', [checkSignUp(), checkIfUserExists], userSignUp);

    //signin route
    
}