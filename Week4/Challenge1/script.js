function calculate() {

    // YOUR CODE GOES HERE
    let number1 = parseInt(document.getElementById("number1").value)
    let number2 = parseInt(document.getElementById("number2").value)
    let result = document.getElementById("result")
    let sum = 0
    for (let i = number1; i <= number2; i++){
        sum += i;
    }
    result.innerText = "The sum is: " + sum
}