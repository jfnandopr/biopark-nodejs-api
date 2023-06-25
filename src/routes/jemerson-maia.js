const express = require('express');
const router = express.Router();
const api = require('../api/jemerson-maia-service')
router.get('/', api.hello);
module.exports = router;