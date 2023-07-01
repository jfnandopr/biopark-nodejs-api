const express = require('express');
const router = express.Router();
const api = require('../api/gustavo-klein')
router.get('/', api.hello);
module.exports = router;