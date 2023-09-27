const User_Model = require('../Model/User_Model')


let getUser = async (req , res) => {
    try {
        const user = req.param.id;
        const response = await User_Model.find({User_Email:user})
        console.log(response)
        res.status(200).json({ statusCode: 200, data: response })

    } catch (error) {
        res.status(500).json({ statusCode: 500, data: error })
    }
}

module.exports = getUser