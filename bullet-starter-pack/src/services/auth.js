const bcrypt = require("bcryptjs"),
logger = require("../loaders/logger"),
jwt = require("jsonwebtoken"),
{ secret } = require("../config"),
User = require("../models/user");


module.exports = class AuthService {
    
    async SignUp(payload) {
        try {
            //get input  
            const { email, password } = payload;          
            
            //hash password
            logger.info("Hashing Password");
            let hashedPassword = await bcrypt.hash(password, 10);

            //create user ...delegate to data access layer later
            logger.info("Creating User");
            const userRecord = await User.create(
                {
                    ...payload,
                    password: hashedPassword
                }
            );           

            //generate jwt
            let token = jwt.sign({ email }, secret),
            user = userRecord.toObject();

            //remove password from user object
            Reflect.deleteProperty(user, 'password');

            //return user details and token
            return {
                user,
                token
            }

        } catch (error) {
            console.log(error);
        }
    }

    async SignIn() {

    }
}