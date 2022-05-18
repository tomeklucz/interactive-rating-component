"use strict";

const containers = document.querySelectorAll(".container");
const btnSubmit = document.querySelector(".btn-submit");
const ratingItems = document.querySelectorAll(".rating-item");
const ratingList = document.querySelector(".rating-value-list");
const userSelection = document.querySelector(".user-selection");
const ratingMessage = document.querySelector(".user-result-text");

const toggleBox = function () {
  containers.forEach((cont) => cont.classList.toggle("hidden"));
};

const clearSelection = function () {
  ratingItems.forEach((item) => {
    item.classList.remove("active");
  });
};

const ratingApp = function () {
  let userRating;
  ratingList.addEventListener("click", function (e) {
    if (!(e.target.className === "rating-item")) return;
    clearSelection();
    e.target.classList.add("active");
    userRating = e.target.value;
  });
  btnSubmit.addEventListener("click", function () {
    toggleBox();
    ratingMessage.innerText = `You selected ${userRating} of 5`;
  });
};

ratingApp();
