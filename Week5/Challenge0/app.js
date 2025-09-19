/* Task 6 - API call */
function get_all_drinks() {
    console.log("[START] get_all_drinks()");

    const api_endpoint_url = 'http://localhost/DrinksAPI/api/drink/read.php'; // local file

    axios.get(api_endpoint_url).
    then(response => {
        console.log("Axios call completed successfully!");

        console.log(response.data);

        let section_results = document.getElementById('results');

        // Build a string of Bootstrap cards
        let result_str = ``;
        let drinks_array = response.data.records; // Array of drink objects
        console.log(drinks_array); // Array of drink objects

        // Task 4 - Display Drinks
        //   Each drink is a Bootstrap card
        // Replace all the hard-coded strings with actual values as read from the JSON file
        for(let drink of drinks_array) {
            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="http://localhost/DrinksAPI/${drink.photo_url}" 
                             class="card-img-top"
                             alt="${drink.id}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                Drink Category • ${drink.category}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);

        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        // YOUR CODE GOES HERE
    });

    console.log("[END] get_all_drinks()");
}


/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
    console.log("[START] populate_category_dropdown()");

    const api_endpoint_url = 'http://localhost/DrinksAPI/api/drink/category.php'; // API endpoint

    axios.get(api_endpoint_url).
    then(response => {

        console.log("Axios call completed successfully!");

        // YOUR CODE GOES HERE
        let categories = document.getElementById("category")
        let cat_array = response.data.records

        for (let cat of cat_array){
            let option = document.createElement("option")
            option.value = cat
            option.textContent = cat
            categories.appendChild(option)
        }

    }).
    catch(error => {
        console.log(error.message);
    });

    console.log("[END] populate_category_dropdown()");
}


/* Task 8 - Category Dropdown Event Listener */
/* Task 9 - Alcoholic Dropdown Event Listener */
/* Task 10 - Name search input Event Listener */
let categories = document.getElementById("category")
categories.addEventListener("change", filter)
let alchohol_drop = document.getElementById("alcoholic")
alchohol_drop.addEventListener("change", filter)
let name_search = document.getElementById("name_search")
name_search.addEventListener("keyup", filter)

function filter(){
    const api = `http://localhost/DrinksAPI/api/drink/search.php?c=${categories.value}&a=${alchohol_drop.value}&n=${name_search.value}`

    axios.get(api)
    .then(response => {
        const drinks_array = response.data.records

        console.log("axios for cat successful")

        let section_results = document.getElementById('results');

        // copied from task 4
        let result_str = ``;
        console.log(drinks_array); // Array of drink objects

        for(let drink of drinks_array) {
            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="http://localhost/DrinksAPI/${drink.photo_url}" 
                             class="card-img-top"
                             alt="${drink.id}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                Drink Category • ${drink.category}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }) 
}






// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();