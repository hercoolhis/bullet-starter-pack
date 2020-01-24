const { Router } = require("express"),
{ getAllUsers } = require("../controllers/userController"),
route = Router();



module.exports = (app) => {
    app.use('/users', route);

    route.get('/all', getAllUsers);
}