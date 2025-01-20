const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const statusController = require('../controllers/status');

const contactusController = require('../controllers/contactus');

router.use('/contactus', contactusController.getContactUsPage);

router.post('/success', statusController.get201);

module.exports = router;