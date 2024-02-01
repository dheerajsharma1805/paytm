const User = require("../dbModel/user");

const validCredentialMiddleware = async (req, res, next) => {
    try {
        console.log("got in to validation");
        // if user exists , response suitably
        const userExists = await User.findOne({email : req.body.email})
        console.log("userExists ", userExists);
        if(userExists && userExists.email) {
            res.status(402);
            res.send("user already exists")
        } else {
            next();
        }
        // if user doesn't exists create one 
    } catch (error) {
        console.log("err is ", error)
        res.send(error);
    }
    // check for user existence with email
}

const validateSignInUser = async (req, res, next) => {
    try {
        const userExists = await User.findOne(req.body)
        console.log("userExists ", userExists);
        if(!userExists) {
            res.json({msg: "Invalid credentials"})
        } else {
            next();
        }
    } catch (error) {
        res.json({msg: "Something went wrong"});
    }
}



module.exports = {validCredentialMiddleware, validateSignInUser};