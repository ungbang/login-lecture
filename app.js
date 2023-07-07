"use strict"; //strict 문법을 준수 하겠다.

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use는 미들웨어를 등록하는 메서드

module.exports = app;
