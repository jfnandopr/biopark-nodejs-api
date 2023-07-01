const express = require('express');
const router = express.Router();
const api = require('../api/jose-maria')
router.get('/', api.hello);
module.exports = router;