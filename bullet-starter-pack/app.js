const config = require("./src/config"),
express = require("express"),
loaders = require("./src/loaders");


async function startServer() {
    try {
        const app = express(),
        appLoaded = await loaders(app);

        if (appLoaded) {
            app.listen(config.port, (error) => {
                if (error) {
                    console.log("Server failed to start", error.message);
                    process.exit(1);                
                }
                console.log(`your server is ready at port ${config.port}`);
            })
        } else {
            throw new Error("Couldn't load app");
        } 

    } catch (error) {
        console.log(error.message);
    }
}

startServer();