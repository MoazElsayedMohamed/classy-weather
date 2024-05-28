import React from "react";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    const {
      temperature_2m_max: max,
      temperature_2m_max: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    return (
      <div>
        <h2>Weather</h2>
        <ul className="weather">
          {dates.map((date) => (
            <Date />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
