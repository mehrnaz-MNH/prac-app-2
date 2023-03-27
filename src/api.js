import { useState, useEffect } from "react";
const API_KEY = "0c770f7e07c04fb89c2173738232703";
const QUERY = "Brisbane";

function useWeather() {

    const [loading, setLoading] = useState(true)
    const [headlines , setHeadlines] = useState([]);
    const [error, setError] = useState(null);
   

        /*getForecastByQuery(QUERY).then(forecasts =>{
            setHeadlines(forecasts);
            setLoading(false);
        })*/

        useEffect(() => {
            getForecastByQuery(QUERY)
            .then((headlines) => {
            setHeadlines(headlines);
            })
            .catch((e) => {
            setError(e);
            })
            .finally(() => {
            setLoading(false);
            });
            }, []);
    

    return {

        loading,
        headlines,
        error,
    }

}

function getForecastByQuery(q) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${q}`
    return fetch(url)
        .then((res) => res.json())
        .then((res) => res.forecast.forecastday[0].hour)
        .then((forecasts) =>
            forecasts.map((forecast) => ({
                time: forecast.time,
                text: forecast.condition.text,
                temp: forecast.temp_c,
                wind: forecast.wind_kph,
                icon : forecast.condition.icon
            }))
        );

}

export default useWeather;
