const express = require("express");
const contentController = require('../controller/content.controller')
const router = express.Router();

router.post('/', (contentController.addContent))
router.get('/', (contentController.getContent))


module.exports = router;