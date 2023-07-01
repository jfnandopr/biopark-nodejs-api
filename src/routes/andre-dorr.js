const express = require('express');
const router = express.Router();
const api = require('../api/andre-dorr-service')
router.get('/', api.hello);
module.exports = router;