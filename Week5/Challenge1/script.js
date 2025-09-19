const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = '0ec4d4a178a5e65314a3b24c1284b4b4';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    const city = document.getElementById("city").value; // Default value, you need to replace this string with actual user input


    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;


    axios.get(api_endpoint)
    .then(response => {
        // Inspect what's in the API response
        console.log(response.data);


        //============================================================================
        // Task 3
        // Retrieve the weather info (e.g. Rain, Clouds, etc.)
        //============================================================================
        
        // YOUR CODE GOES HERE
        // Make use of const weather_type_images (at the top)
        let weathers = response.data.weather
        let weather_images = document.getElementById("weather_images")
        weather_images.innerHTML = ""
        for (let weather of weathers){
            let weather_url = weather_type_images[weather.main]
            let p = document.createElement("p")
            let img = document.createElement("img")
            img.src = weather_url
            p.appendChild(img)
            weather_images.appendChild(p)
        }

        //======================================================================================
        // Task 4
        // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
        //======================================================================================

        // YOUR CODE GOES HERE
        // Make use of const temp_images (at the top)
        let temp_img = document.getElementById("temperature_image")
        let temp = response.data.main.temp
        let temp_status = ""
        if (temp > 25) {
            temp_status = "Hot"
        }
        else if (temp >= 5) {
            temp_status = "Okay"
        }
        else {
            temp_status = "Cold"
        }
        let temp_url = temp_images[temp_status]
        temp_img.src = temp_url
        
    })
    .catch(error => {
        console.log(error.message);
    })
    
    console.log("=== [END] check_weather() ===");
}
