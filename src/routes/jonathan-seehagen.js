const express = require('express');
const router = express.Router();
const api = require('../api/jonathan-seehagen-service')
router.get('/', api.hello);
module.exports = router;