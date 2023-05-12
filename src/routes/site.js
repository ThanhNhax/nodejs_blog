const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

router.get('/', siteController.index);
module.exports = router;
/**
 * những trang chỉ 1 thành phần thôi thì cho vào routes siteRouter (EX: pages Home, contact, search, ....)
 */
