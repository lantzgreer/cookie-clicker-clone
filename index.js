let rate = 1;
let autoRateChange = 5;

document.getElementById("clickme").onclick = function () {
    clickFunction();
    };
    function clickFunction() {
    boxValue = Number(document.getElementById("counter").innerHTML);
    boxValue = boxValue + rate;
    document.getElementById("counter").innerHTML = boxValue;
    
    console.log(boxValue);
    }

    myInterval = setInterval(startTime, 1000);

    function startTime() {
        boxValue = Number(document.getElementById("counter").innerHTML);
        boxValue = boxValue + autoRateChange;
        document.getElementById("counter").innerHTML = boxValue;

    }

    document.getElementById("reset").onclick = reset;

    function reset() {
        console.log('test');
        clearInterval(myInterval);
    }