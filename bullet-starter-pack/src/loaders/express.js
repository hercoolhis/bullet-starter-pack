const bodyParser = require("body-parser"),
errorHandler = require("./errorHandler");


module.exports = async (app) => {
    app.use(bodyParser.json());
    app.use(errorHandler);

    app.get("/status", (req, res) => {
        
        throw new Error("Play play error")       
        //res.send("Express app activated");
    })

    return app;
}