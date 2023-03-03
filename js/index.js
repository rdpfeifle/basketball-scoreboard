/* Home */

let home = 0;

// home score container
let homeScore = document.querySelector(".home-score-container");

// home buttons
let onePointBtn = document.getElementById("one-point");
let twoPointsBtn = document.getElementById("two-points");
let threePointsBtn = document.getElementById("three-points");

// home functions
function addOneHome() {
  home++;
  homeScore.textContent = home;
}

function addTwoHome() {
  home += 2;
  homeScore.textContent = home;
}

function addThreeHome() {
  home += 3;
  homeScore.textContent = home;
}

// event listeners - home
onePointBtn.addEventListener("click", addOneHome);
twoPointsBtn.addEventListener("click", addTwoHome);
threePointsBtn.addEventListener("click", addThreeHome);

/* Guest */

let guest = 0;

// guest score container
let guestScore = document.querySelector(".guest-score-container");

// guest buttons
let onePointBtnG = document.getElementById("one-point-g");
let twoPointsBtnG = document.getElementById("two-points-g");
let threePointsBtnG = document.getElementById("three-points-g");

// guest functions
function addOneGuest() {
  guest++;
  guestScore.textContent = guest;
}

function addTwoGuest() {
  guest += 2;
  guestScore.textContent = guest;
}

function addThreeGuest() {
  guest += 3;
  guestScore.textContent = guest;
}

// event listeners - guest
onePointBtnG.addEventListener("click", addOneGuest);
twoPointsBtnG.addEventListener("click", addTwoGuest);
threePointsBtnG.addEventListener("click", addThreeGuest);

/* Reset both scores */

let resetBtn = document.getElementById("reset");

function reset() {
  home = 0;
  guest = 0;
  homeScore.textContent = home;
  guestScore.textContent = guest;
}

resetBtn.addEventListener("click", reset);
