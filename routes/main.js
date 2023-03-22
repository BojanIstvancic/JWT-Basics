const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main.js");

const authenticationMiddleware = require("../middleware/auth.js");

router.route("/dashboard").get(authenticationMiddleware, dashboard);
// we always add middleware before dashoboard - cause this is protected route
router.route("/login").post(login);

module.exports = router;
