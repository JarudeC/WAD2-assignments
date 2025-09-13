//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];


// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE

    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)
    let dropdown = document.getElementById("wiki_links")
    let a = dropdown.getElementsByTagName("a")
    let random = Math.floor(Math.random() * 2)
    let gender = stars_dataset[random]
    let i = 0
    for (let name in gender){
        a[i].href = gender[name][2]
        a[i].innerText = name
        curr_img = document.getElementById("image" + String(i + 1))
        curr_heading = document.getElementById("slide_heading" + String(i + 1))
        curr_title = document.getElementById("slide_title" + String(i + 1))
        curr_img.src = "images/" + gender[name][0]
        curr_heading.innerText = name
        curr_title.innerText = gender[name][1]
        i ++
    }
    male_button = document.getElementById("male_button")
    female_button = document.getElementById("female_button")
    if (random === 0){
        male_button.disabled = true
        female_button.disabled = false
    }
    else {
        male_button.disabled = false
        female_button.disabled = true
    }
}



// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {
    // YOUR CODE GOES HERE
    let dropdown = document.getElementById("wiki_links")
    let a = dropdown.getElementsByTagName("a")
    let gender = stars_dataset[0]
    let i = 0
    for (let name in gender){
        a[i].href = gender[name][2]
        a[i].innerText = name
        curr_img = document.getElementById("image" + String(i + 1))
        curr_heading = document.getElementById("slide_heading" + String(i + 1))
        curr_title = document.getElementById("slide_title" + String(i + 1))
        curr_img.src = "images/" + gender[name][0]
        curr_heading.innerText = name
        curr_title.innerText = gender[name][1]
        i ++
    }
    male_button = document.getElementById("male_button")
    female_button = document.getElementById("female_button")
    male_button.disabled = true
    female_button.disabled = false
}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

    // YOUR CODE GOES HERE
    let dropdown = document.getElementById("wiki_links")
    let a = dropdown.getElementsByTagName("a")
    let gender = stars_dataset[1]
    let i = 0
    for (let name in gender){
        a[i].href = gender[name][2]
        a[i].innerText = name
        curr_img = document.getElementById("image" + String(i + 1))
        curr_heading = document.getElementById("slide_heading" + String(i + 1))
        curr_title = document.getElementById("slide_title" + String(i + 1))
        curr_img.src = "images/" + gender[name][0]
        curr_heading.innerText = name
        curr_title.innerText = gender[name][1]
        i ++
    }
    male_button = document.getElementById("male_button")
    female_button = document.getElementById("female_button")
    male_button.disabled = false
    female_button.disabled = true
}