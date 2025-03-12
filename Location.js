
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '4e0ace4af852e0bde9537ffe85132aa3',
//         'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
//     }
// };

const getWeather = () => {
    // cityName.innerHTML = city_name;
    fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={4e0ace4af852e0bde9537ffe85132aa3}')
    .then(response => response.json())
    .then((response) => {
        // try {
        //     const response = await fetch('https://weather-api138.p.rapidapi.com/weather?city_name=' + city_name, options)
        //     const result = await response.text()
            console.log(response)
            // main.innerHTML= response.weather[[0]].main
            // // temp.innerHTML =((response.main.temp) -273.15).toFixed(2);
            // temp2.innerHTML =((response.main.temp) -273.15).toFixed(2)
            // feels_like.innerHTML =((response.main.feels_like)-273.15).toFixed(2);
            // temp_min.innerHTML = ((response.main.temp_min)-273.15).toFixed(2);
            // temp_max.innerHTML = ((response.main.temp_max)-273.15).toFixed(2);
            // humidity.innerHTML = response.main.humidity
            // humidity2.innerHTML = response.main.humidity
            // speed.innerHTML = ((response.wind.speed) * 3.6).toFixed(2)
            // wind_speed2.innerHTML=((response.wind.speed) * 3.6).toFixed(2)
            // sunrise.innerHTML = response.sys.sunrise
            // sunset.innerHTML = response.sys.sunset
        })
        .catch(err => console.error(err));

        // } 
        // catch (error) {
        //     console.error(error);
        // }
}

// submit.addEventListener("click", (e)=>{
//     e.preventDefault()
//     getWeather(city_nam.value)
// })
getWeather();


// function gotLocation(position){
//     console.log(position);
// }
// function FailedToGet(){
//     console.log("There wast some issue")
// }
// Loc.addEventListener("click", async (e) =>{
            
//     navigator.geolocation.getCurrentPosition(gotLocation,FailedToGet)
// })



// if(city_name[i]=="MY Location")
//     {
//         city_name[i].addEventListener("click", async (e) =>{
            
//             navigator.geolocation.getCurrentPosition(gotLocation,FailedToGet)
//         })
//     }