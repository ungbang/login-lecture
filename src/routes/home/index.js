"use strict"; //strict 문법을 준수 하겠다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router; // 외부 파일에서 해당 파일을 사용할 수 있도록 내보내기 하는 것
