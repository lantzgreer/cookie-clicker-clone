let rate = 1;
let autoRateChange = 0;

// Tier 1 Button Stats
let tier1RateThreshold = 10;
//let tier1RateCost = 10;
let tier1RateMultiplier = 2; // multiply times 2
let tier1RateIncrease = 0.1;

document.getElementById("clickme").onclick = function () {
  clickFunction();
};
function clickFunction() {
  boxValue = Number(document.getElementById("counter2").innerHTML);
  boxValue = boxValue + rate;
  document.getElementById("counter").innerHTML = Math.round(boxValue);
  document.getElementById("counter2").innerHTML = boxValue;
  autoStartCheck(boxValue);
  console.log(Math.round(boxValue * 10) / 10);
}

myInterval = setInterval(startTime, 1000);

function startTime() {
  boxValue = Number(document.getElementById("counter2").innerHTML);
  console.log(Math.round(boxValue * 10) / 10);
  boxValue = boxValue + autoRateChange;
  document.getElementById("counter").innerHTML = Math.round(boxValue);
  document.getElementById("counter2").innerHTML = boxValue;
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

document.getElementById("tier1button").onclick = function () {
  // added so can only click once.
  document.getElementById("tier1button").disabled = true;
  //console.log("tett");
  //beginTime();
  autoRateChange = autoRateChange + tier1RateIncrease;

  document.getElementById("rateAdded").innerHTML =
    Math.round(autoRateChange * 100) / 100;
  document.getElementById("counter").innerHTML = Math.round(
    boxValue - tier1RateThreshold
  );
  document.getElementById("counter2").innerHTML = boxValue - tier1RateThreshold;
  tier1RateThreshold = tier1RateThreshold * tier1RateMultiplier;
  document.getElementById("tier1cost").innerHTML = tier1RateThreshold;
};

document.getElementById("stop").onclick = function () {
  clearInterval(myInterval);
};

document.getElementById("reset").onclick = reset;

function reset() {
  document.getElementById("counter").innerHTML = 0;
  document.getElementById("counter2").innerHTML = 0;
  document.getElementById("tier1button").disabled = true;

  if (myInterval) {
    clearInterval(myInterval);
  }
  location.reload();
}
