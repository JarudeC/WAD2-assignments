let btn = document.getElementById("justin-btn")
let result = document.getElementById("result")

// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
btn.addEventListener("mouseover", () => {
    result.innerText = "Welcome to My Heart"
    result.style.background = "pink"
    result.style.color = "blue"
})

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
btn.addEventListener("mouseout", () => {
    result.innerText = "Don't Leave Me Please"
    result.style.background = "black"
    result.style.color = "red"
})
