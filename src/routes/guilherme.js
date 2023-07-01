const express = require('express');
const router = express.Router();
const api = require('../api/guilherme-gabriel-service')
router.get('/', api.hello);
module.exports = router;