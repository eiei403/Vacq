const express = require('express'); 
const {getHospitals , getHospital , createHospital , updateHospital , deleteHospital} = require('a-4-eiei403/controllers/hospitals'); 

const router = express.Router(); 

router.route('/').get(getHospitals).post(createHospital);

router.route('/:id').get(getHospitals).put(updateHospital).delete(deleteHospital); 

module.exports = router;
