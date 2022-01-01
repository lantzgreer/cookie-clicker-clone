let rate = 1;
let autoRateChange = 0;

// Tier 1 Button Stats
let tier1RateThreshold = 10;
let tier1RateCost = 10;
let tier1RateIncrease = 5;

document.getElementById("clickme").onclick = function () {
  clickFunction();
};
function clickFunction() {
  boxValue = Number(document.getElementById("counter").innerHTML);
  boxValue = boxValue + rate;
  document.getElementById("counter").innerHTML = boxValue;
  autoStartCheck(boxValue);
  console.log(boxValue);
}

myInterval = setInterval(startTime, 1000);

function startTime() {
  boxValue = Number(document.getElementById("counter").innerHTML);
  console.log(boxValue);
  boxValue = boxValue + autoRateChange;
  document.getElementById("counter").innerHTML = boxValue;
  // Added this to show or disable
  if (boxValue < tier1RateThreshold) {
    document.getElementById("tier1button").disabled = true;
  }
  if (boxValue > tier1RateThreshold) {
    document.getElementById("tier1button").disabled = false;
  }
}

// Check to see when clicked if threshold = boxvalue
function autoStartCheck(val) {
  if (val == tier1RateThreshold) {
    document.getElementById("tier1button").disabled = false;
  }
}

document.getElementById("stop").onclick = function () {
  clearInterval(myInterval);
};

document.getElementById("reset").onclick = reset;

function reset() {
  document.getElementById("counter").innerHTML = 0;
  document.getElementById("tier1button").disabled = true;

  if (myInterval) {
    clearInterval(myInterval);
  }
  location.reload();
}
