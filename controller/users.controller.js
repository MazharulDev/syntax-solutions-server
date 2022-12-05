const { getDb } = require("../utils/dbConnect");

module.exports.getUsers = async (req, res) => {
    try {
        const db = getDb();
        const users = await db.collection("users").find().toArray();
        res.send(users)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "User not Load",
            error: error.message
        })
    }
};
