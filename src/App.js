import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";
// import { async } from "q";

const API_KEY = "4bfc9c92a94e18bfe80b9636b9e6f50d";


class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);


      var sunrise = data.sys.sunrise;
      var date = new Date();
      date.setTime(sunrise);
      var sunrise_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      var date = new Date(data.sys.sunset * 1000);
      var hours = date.getHours(); // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();


      var sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города!"
      });
    }
  }


  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;