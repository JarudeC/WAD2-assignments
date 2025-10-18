// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars

function display_default() {

    // YOUR CODE GOES HERE
    // Call API

    let gender_num = Math.floor(Math.random() * 2)
    let gender = ""
    if (gender_num === 0){
        gender = "f";
    }
    else {
        gender = "m";
    }

    let male_button = document.getElementById("male_button")
    let female_button = document.getElementById("female_button")

    if (gender === "f") {
        male_button.disabled = false
        female_button.disabled = true
    }
    else {
        male_button.disabled = true
        female_button.disabled = false
    }

    let wiki_links = document.getElementById("wiki_links")
    wiki_links.innerHTML = ""
    wiki_html = ""

    let imdb_links = document.getElementById("imdb_links")
    imdb_links.innerHTML = ""
    imdb_html = ""

    let slide_show = document.getElementById("slide_show")
    slide_show.innerHTML = ""
    slide_html = ""

    let active_check = false
    let check = []

    axios.get("http://krazywoman.com/krazystars/api/star/search.php?g=" + gender)
    .then(response => {
        console.log(response)
        let stars = response.data.records
        for (let star of stars) {
            let active = ""
            if (!active_check) {
                active = "active"
                active_check = true
            }
            if (check.indexOf(star.id) == -1) {
                check.push(star.id)
            }
            else {
                continue
            }

            wiki_html += `<a id="wiki${star.id}" class="dropdown-item" href="${star.wikipedia_url}" target="_blank">${star.fullname}</a>`
            imdb_html += `<a id="imdb${star.id}" class="dropdown-item" href="${star.imdb_url}" target="_blank">${star.fullname}</a>`;
            slide_html += `<div class="carousel-item ${active}">
                            <img id="image${star.id}" src="${star.photo_background_url}" alt="">
                            <div class="carousel-caption">
                                <h2 class="star_h2" id="slide_heading${star.id}" style="padding: 5px; background-color: grey; color: white">${star.fullname}</h2>
                                <p id="slide_title${star.id}" style="padding: 5px; background-color: black; color: white">${star.quote}</p>
                            </div>
                        </div>`
        }

        wiki_links.innerHTML = wiki_html
        imdb_links.innerHTML = imdb_html
        slide_show.innerHTML = slide_html
    })
}


// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE
    let gender = "m"

    let male_button = document.getElementById("male_button")
    let female_button = document.getElementById("female_button")

    male_button.disabled = true
    female_button.disabled = false

    let wiki_links = document.getElementById("wiki_links")
    wiki_links.innerHTML = ""
    wiki_html = ""

    let imdb_links = document.getElementById("imdb_links")
    imdb_links.innerHTML = ""
    imdb_html = ""

    let slide_show = document.getElementById("slide_show")
    slide_show.innerHTML = ""
    slide_html = ""

    let active_check = false
    let check = []

    axios.get("http://krazywoman.com/krazystars/api/star/search.php?g=" + gender)
    .then(response => {
        console.log(response)
        let stars = response.data.records
        for (let star of stars) {
            let active = ""
            if (!active_check) {
                active = "active"
                active_check = true
            }
            if (check.indexOf(star.id) == -1) {
                check.push(star.id)
            }
            else {
                continue
            }

            wiki_html += `<a id="wiki${star.id}" class="dropdown-item" href="${star.wikipedia_url}" target="_blank">${star.fullname}</a>`
            imdb_html += `<a id="imdb${star.id}" class="dropdown-item" href="${star.imdb_url}" target="_blank">${star.fullname}</a>`;
            slide_html += `<div class="carousel-item ${active}">
                            <img id="image${star.id}" src="${star.photo_background_url}" alt="">
                            <div class="carousel-caption">
                                <h2 class="star_h2" id="slide_heading${star.id}" style="padding: 5px; background-color: grey; color: white">${star.fullname}</h2>
                                <p id="slide_title${star.id}" style="padding: 5px; background-color: black; color: white">${star.quote}</p>
                            </div>
                        </div>`
        }

        wiki_links.innerHTML = wiki_html
        imdb_links.innerHTML = imdb_html
        slide_show.innerHTML = slide_html
    })

}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE
    let gender = "f"

    let male_button = document.getElementById("male_button")
    let female_button = document.getElementById("female_button")

    male_button.disabled = false
    female_button.disabled = true

    let wiki_links = document.getElementById("wiki_links")
    wiki_links.innerHTML = ""
    wiki_html = ""

    let imdb_links = document.getElementById("imdb_links")
    imdb_links.innerHTML = ""
    imdb_html = ""

    let slide_show = document.getElementById("slide_show")
    slide_show.innerHTML = ""
    slide_html = ""

    let active_check = false
    let check = []

    axios.get("http://krazywoman.com/krazystars/api/star/search.php?g=" + gender)
    .then(response => {
        console.log(response)
        let stars = response.data.records
        for (let star of stars) {
            let active = ""
            if (!active_check) {
                active = "active"
                active_check = true
            }
            if (check.indexOf(star.id) == -1) {
                check.push(star.id)
            }
            else {
                continue
            }

            wiki_html += `<a id="wiki${star.id}" class="dropdown-item" href="${star.wikipedia_url}" target="_blank">${star.fullname}</a>`
            imdb_html += `<a id="imdb${star.id}" class="dropdown-item" href="${star.imdb_url}" target="_blank">${star.fullname}</a>`;
            slide_html += `<div class="carousel-item ${active}">
                            <img id="image${star.id}" src="${star.photo_background_url}" alt="">
                            <div class="carousel-caption">
                                <h2 class="star_h2" id="slide_heading${star.id}" style="padding: 5px; background-color: grey; color: white">${star.fullname}</h2>
                                <p id="slide_title${star.id}" style="padding: 5px; background-color: black; color: white">${star.quote}</p>
                            </div>
                        </div>`
        }

        wiki_links.innerHTML = wiki_html
        imdb_links.innerHTML = imdb_html
        slide_show.innerHTML = slide_html
    })

}