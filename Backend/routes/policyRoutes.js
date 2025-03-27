const express = require('express');
const { getJamPolicy } = require('../controllers/policyController');

const router = express.Router();

router.get('/', getJamPolicy);

module.exports = router;
