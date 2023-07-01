const express = require('express');
const router = express.Router();
const api = require('../api/allan-escher-service')
router.get('/', api.hello);
module.exports = router;