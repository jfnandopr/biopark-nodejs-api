const express = require('express');
const router = express.Router();
const api = require('../api/matias-arenhard-service')
router.get('/', api.hello);
module.exports = router;