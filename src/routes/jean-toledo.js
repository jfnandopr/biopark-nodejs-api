const express = require('express');
const router = express.Router();
const api = require('../api/jean-toledo')
router.get('/', api.hello);
module.exports = router;