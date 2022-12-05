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
module.exports.getAdmin = async (req, res) => {
    try {
        const db = getDb();
        const email = req.params.email;
        const user = await db.collection("users").findOne({ email: email });
        const isAdmin = user.role === 'admin';
        res.send({ admin: isAdmin });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "admin not Load",
            error: error.message
        })
    }
}

