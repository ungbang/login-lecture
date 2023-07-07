"use strict";

const id = document.querySelector("#id"), //질의선택자
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pwsor: psword.value,
  };

  console.log(req);
}
