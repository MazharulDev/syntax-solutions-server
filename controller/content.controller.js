const { getDb } = require("../utils/dbConnect");

module.exports.addContent = async (req, res) => {
    try {
        const db = getDb();
        const content = req.body;
        const result = await db.collection("content").insertOne(content);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "content not post",
            error: error.message
        })
    }
}
module.exports.getContent = async (req, res) => {
    try {
        const db = getDb();
        const content = await db.collection("content").find().toArray();
        res.send(content);
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "content not Load",
            error: error.message
        })
    }
}