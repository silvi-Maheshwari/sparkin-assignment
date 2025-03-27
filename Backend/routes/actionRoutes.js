const express = require('express');
const { saveActions } = require('../controllers/actionController');

const router = express.Router();

router.post('/', saveActions);

module.exports = router;
