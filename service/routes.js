const express = require("express");
const serviceController = require('./controller');
const router = express.Router();


 router.post('/createservice', serviceController.createservice);

 router.get('/getservicebyserviceID', serviceController.getservicebyserviceID);

 router.get('/getServiceBySalonId', serviceController.getServiceBySalonId);

 router.delete('/deleteservicebyserviceid', serviceController.deleteservicebyserviceid);


module.exports = router;