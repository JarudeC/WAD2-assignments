// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
// highlight words greater than user input
function highlight_words() {

    // YOUR CODE GOES HERE
    let div = document.getElementById("book_chapter")
    let paragraphs = div.getElementsByTagName("p")
    let len = Number(prompt("Enter word length (words longer than the length will be highlighted for you)"))

    for (let paragraph of paragraphs){
        let output = ""
        p_list = paragraph.textContent.split(" ")
        for (let word of p_list) {
            if (word.length > len){
                output += "<span style='background-color: yellow'>" + word + "</span> "
            }
            else {
                output += word + " "
            }
        }

        paragraph.innerHTML = output
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
// num of words per paragraph
function show_num_words() {
    
    // YOUR CODE GOES HERE
    let div = document.getElementById("book_chapter")
    let paragraphs = div.getElementsByTagName("p")
    let word_counts = div.getElementsByTagName("span")
    let i = 0
    for (let paragraph of paragraphs){
        p_list = paragraph.textContent.split(" ")
        let count = p_list.length
        word_counts[i].innerText = "{" + count + " words}"
        word_counts[i].style.fontWeight = "bold"
        i ++
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
// replace , with star, ? with ? emoji, ! with ! emoji
function show_emoticons() {

    // YOUR CODE GOES HERE
    let div = document.getElementById("book_chapter")
    let paragraphs = div.getElementsByTagName("p")

    for (let paragraph of paragraphs){
        let output = ""
        for (let ch of paragraph.textContent){
            if (ch === ","){
                output += "⭐"
            }
            else if (ch === "?"){
                output += "❓"
            }
            else if (ch === "!"){
                output += "❗"
            }
            else{
                output += ch
            }
        }

        paragraph.textContent = output
    }
}