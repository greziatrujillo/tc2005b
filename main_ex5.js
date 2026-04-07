//JS lab exercise 5

//5. Receive a string of digits and return the inverse

function inverseDigits(n) {
    var num = prompt ("Enter a number: ");
    var result = "";
    for (var i = num.length - 1; i >= 0; i--) {
        result += num[i];
    }

    return result;
}

//print the result for user to see
function testReverse() {
    var result = inverseDigits();
    document.getElementById("resultReverse").innerHTML = "The inverse of the number is: " + result;
}

