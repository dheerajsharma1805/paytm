const User = require('../dbModel/user')

const createUser = (req, res) => {
    try {
        const user = new User(req.body);
        user.save();
    } catch (error) {
        res.json({err: "err ", msg: error.message});
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({email : req.body.email, password: req.body.password})
        console.log("user ", user);
    } catch (error) {
        res.json({msg: "Something went wrong, please try again later"});
    }
}

module.exports = {createUser, loginUser};