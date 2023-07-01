const express = require('express');
const router = express.Router();
const api = require('../api/ivanilson_silva')
router.get('/', api.hello);
module.exports = router;