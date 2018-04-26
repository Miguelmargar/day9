function addition(num1, num2) {
    if (typeof (num1) == "number" && typeof(num2) == "number") {
        return num1 + num2;
    } else {
        alert("Arguments must both be numbers");
        
    }
    return num1 + num2;
}

function subtract(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 - num2;
    } else { 
        alert("Arguments must both be numbers");
    }
    return num1 - num2;
}

function multi(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 * num2;
    } else {
        alert("Arguments must both be numbers");
    }
    return num1 * num2;
}