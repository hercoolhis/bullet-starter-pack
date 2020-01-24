const User = require("../../models/user"),
logger = require("../../loaders/logger");


const checkIfUserExists = async ({body: { email }}, res, next) => {
    try {
        const checkUser = await User.findOne({ email })
        
        if (checkUser) {
            throw new Error("User already exists")
        } else {
            next();
        }

    } catch ({ message }) {
        logger.error(message);
        throw new Error(message);                  
    }
}



module.exports = {
    checkIfUserExists
}