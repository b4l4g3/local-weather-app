import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { setStateTemplate, getPaths, toCelsius, toFahrenheit } from './../helper.js';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`
const Background = styled.div`
position: fixed;
left: 0;
right: 0;
z-index: -1;
transform: scale(1.1);
display: block;
background-image: ${props => props.bgUrl};
background-size: cover;
width: 100%;
height: 100%;
filter: blur(2px);
`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const ToggleUnits = styled.div`
  margin-top: -15px;
  text-shadow: 0.2px 0.2px 3px #000;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
`

const Unit = styled.span`
  margin: 0px 15px;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.state = {
      scale: 'f',
      style: {
        celsius:  {color: `#8c8c8c`},
        fahrenheit: {color: `#dee2e2`}
      }
    }
  }

  getLocation() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.ipify.org/?format=json')
      .then(resp => resp.json())
      .then(resp => {
        return fetch(`https://cors-anywhere.herokuapp.com/http://ip-api.com/json/${resp.ip}`)
      })
      .then(resp => resp.json())
      .then(resp => {
        const lat = Math.round(resp.lat);
        const lon = Math.round(resp.lon);
        return `${lat},${lon}`;
      })
      .then(resp => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/390040fe85ad0e8ff9ff687e0b4da4f1/${resp}`)
          .then(resp => resp.json())
          .then(resp => {
            this.setState(setStateTemplate(resp))
          })
      })
  }

  handleFahrenheitChange() {
    let finalState = this.state;
    if (this.state.scale === 'c') {
      Object.keys(this.state).forEach((key) => {
        let a;
        a = key;
        Object.keys(this.state[key]).forEach((key) => {
          let b;
          b = key;
          Object.keys(this.state[a][key]).forEach((key) => {
            if (key === 'temp') {
              finalState[a][b][key] = toFahrenheit(this.state[a][b][key])
            }
          })
        })
      });
      this.setState({
        scale: 'f',
        style: {
          celsius:  {color: `#8c8c8c`},
          fahrenheit: {color: `#dee2e2`}
        }
      })
    } else {
      return;
    }
  }

  handleCelsiusChange() {
    let finalState = this.state;
    if (this.state.scale === 'f') {
      Object.keys(this.state).forEach((key) => {
        let a;
        a = key;
        Object.keys(this.state[key]).forEach((key) => {
          let b;
          b = key;
          Object.keys(this.state[a][key]).forEach((key) => {
            if (key === 'temp') {
              finalState[a][b][key] = toCelsius(this.state[a][b][key])
            }
          })
        })
      });
      this.setState({
        scale: 'c',
        style: {
          celsius:  {color: `#dee2e2`},
          fahrenheit: {color: `#8c8c8c`}
        }
      })
    } else {
      return;
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    let bgUrl;
    if (this.state.currently) {
      const isDayLight = this.state.currently.today.isDayLight;
      isDayLight ? bgUrl = `url(${getPaths('day')[`./${this.state.currently.today.icon}.jpg`]})` :
        bgUrl = `url(${getPaths('night')[`./${this.state.currently.today.icon}.jpg`]})`;
    };
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.currently ? (
          <React.Fragment>
            <Background bgUrl={bgUrl} />
            <Wrapper>
              <ToggleUnits><Unit style={this.state.style.celsius} onClick={this.handleCelsiusChange}>°C</Unit><Unit style={this.state.style.fahrenheit} onClick={this.handleFahrenheitChange}>°F</Unit></ToggleUnits>
              <WeatherInfo celsiusChange={this.handleCelsiusChange} fahrenheitChange={this.handleFahrenheitChange} mainTheme weatherData={this.state.currently.today} />
              <Forecast nextDays={this.state.nextDays} />
            </Wrapper>
          </React.Fragment>
        ) : (
            <p>Loading.</p>
          )}
      </React.Fragment>
    );
  }
}

export default App;
