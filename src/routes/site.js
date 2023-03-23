const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.use("/search", siteController.search);

router.use("/", siteController.index);
module.exports = router;
/**
 * những trang chỉ 1 thành phần thôi thì cho vào routes siteRouter (EX: pages Home, contact, search, ....)
 */
