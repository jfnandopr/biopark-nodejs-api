const express = require('express');
const router = express.Router();
const api = require('../api/cintya-miotto-service')
router.get('/', api.hello);
module.exports = router;