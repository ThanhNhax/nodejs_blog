const express = require('express');
const router = express.Router();
const repostController = require('../app/controllers/RepostController');

router.get('/', repostController.index);

module.exports = router;
