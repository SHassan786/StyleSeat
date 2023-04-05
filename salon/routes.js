const express = require("express");
const salonController = require('./controller');
const router = express.Router();


 router.post('/createSalon', salonController.createSalon);


module.exports = router;