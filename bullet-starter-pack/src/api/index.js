const { Router } = require("express"),
user = require("./routes/user");


module.exports = () => {
    const app = Router();
    user(app);

    return app;
}