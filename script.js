
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'fc77eba2cdmsh3e40dc3e7014e9ep1fda4fjsnea9174e5c1b8',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};

const getWeather = (city_name) => {
    cityName.innerHTML = city_name;
    fetch('https://weather-api138.p.rapidapi.com/weather?city_name=' + city_name, options)
    .then(response => response.json())
    .then((response) => {
            console.log(response)
            main.innerHTML= response.weather[[0]].main
            temp2.innerHTML =((response.main.temp) -273.15).toFixed(2)
            feels_like.innerHTML =((response.main.feels_like)-273.15).toFixed(2);
            temp_min.innerHTML = ((response.main.temp_min)-273.15).toFixed(2);
            temp_max.innerHTML = ((response.main.temp_max)-273.15).toFixed(2);
            humidity.innerHTML = response.main.humidity
            humidity2.innerHTML = response.main.humidity
            speed.innerHTML = ((response.wind.speed) * 3.6).toFixed(2)
            wind_speed2.innerHTML=((response.wind.speed) * 3.6).toFixed(2)
            sunrise.innerHTML = response.sys.sunrise
            sunset.innerHTML = response.sys.sunset
        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city_nam.value)
})
getWeather("Kolkata");
let city_name= document.querySelectorAll(".dropdown-item")
for(let i=0;i<7;i++)
{
    city_name[i].addEventListener("click", (e) =>{
        e.preventDefault()
        getWeather(city_name[i].innerHTML);
    })
}


let btnClick =document.querySelector("#Butt")
btnClick.addEventListener("click", () =>{

    window.location.href = "page2.html";
});
