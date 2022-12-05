const express = require("express");
const usersController = require("../controller/users.controller");
const router = express.Router();

router.get('/', (usersController.getUsers))
router.get('/admin/:email', (usersController.getAdmin))


module.exports = router;