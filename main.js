const search = document.querySelector("#searchInput");
const cityName = document.querySelector(".cityName");
const degree = document.querySelector(".degree");
const desc = document.querySelector(".desc");

search.addEventListener("keypress", findWeatherInfo);

const weatherApi = new WeatherAPI();

function findWeatherInfo(e){
    if(e.keyCode == "13"/*Enter'a basılırsa*/){
        const cityName = search.value.trim();
        weatherApi.getWeatherInfo(cityName)
        .then(data => {
            if(data.message == "city not found"){
                alert("Şehir Bulunamadı..!");
                search.value = "";
            }else{
                display(data);
            }
        })
        .catch(err => console.log(err));
    }
}

function display(data){
    cityName.textContent = data.name;
    degree.textContent = Math.round(data.main.temp) + "°";
    desc.textContent = data.weather[0].description;
    
    search.value = "";
}