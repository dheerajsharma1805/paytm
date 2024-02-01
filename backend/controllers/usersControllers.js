const userService = require('../dbServices/userService')

const getUser = async (req, res) => {
    try {
        console.log("You hit home");
        res.send("You hit home");
    } catch (error) {
        res.send(error);
    }
}

const signUpUser = async (req, res) => {
    try {
        await userService.createUser(req, res);
        res.json({msg :"Data is saved"});
    } catch (error) {
        res.json({msg :"Something went wrong, please try again later"});
    }
}

const signInUser = async (req, res) => {
    try {
        await userService.loginUser(req, res);
        res.status(200)
        res.json({msg: "User Found"})
    } catch (error) {
        res.status(404);
        res.json({msg : "Something went wrong, please try again later"});
    }
}

module.exports = {getUser, signUpUser, signInUser};