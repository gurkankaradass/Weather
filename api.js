class WeatherAPI{
    constructor(){
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "b0634d60f39d9451f604710aa03cd7a5";
        
    }
    async getWeatherInfo(cityName){
        const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`)
        const data = await response.json();
        return data;
    }
}