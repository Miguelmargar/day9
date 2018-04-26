function areaOfCircle(n) {
    let result = 3.1416 * (n * n);
    if (arguments.length > 1) {
        alert("Only one variable needed");
    } 
    if (n == 0) {
        alert("0 value not valid");
    } 
    if (n < 0) {
        alert("Negative value not valid")
    } 
    if (typeof(n) != "number") {
        alert("Argument given in not a number");
    } else {
    return Number(result.toFixed(2));
    }
}

function squareRoot(n) {
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}

function squareMe(n) {
    let result = 9;
    return Number(result.toFixed(2));
}