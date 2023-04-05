const express = require("express");
const shiftController = require('./controller');
const router = express.Router();


router.post('/createshift', shiftController.createshift);

router.get('/getshiftid', shiftController.getshiftsbyshiftID );

router.get('/getserviceid', shiftController.getshiftbyserviceid);

router.delete('/deleteshift', shiftController.deleteshiftsbyshiftid);


module.exports = router;