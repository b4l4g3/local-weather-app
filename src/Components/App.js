import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { setStateTemplate } from './../helper.js';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';

const reqDayImgs = require.context('./Background/Day', true, /\.jpg$/)
const reqNightImgs = require.context('./Background/Night', true, /\.jpg$/)

const dayImgs = reqDayImgs
  .keys()
  .reduce((images, path) => {
    images[path] = reqDayImgs(path)
    return images
  }, {})

const nightImgs = reqNightImgs
  .keys()
  .reduce((images, path) => {
    images[path] = reqNightImgs(path)
    return images
  }, {})

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
filter: blur(5px);
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getLocation() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.ipify.org/?format=json')
      .then(resp => resp.json())
      .then(resp => resp.ip)
      .then(resp => {
        return fetch(`https://cors-anywhere.herokuapp.com/http://ip-api.com/json/${resp}`)
      })
      .then(resp => resp.json())
      .then(resp => {
        const lat = Math.round(resp.lat);
        const lon = Math.round(resp.lon);
        const coords = `${lat},${lon}`;
        return coords;
      })
      .then(resp => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/390040fe85ad0e8ff9ff687e0b4da4f1/${resp}`)
          .then(resp => resp.json())
          .then(resp => {
            this.setState(setStateTemplate(resp))
          })
      })
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    let bgUrl;
    if (this.state.currently) {
      const isDayLight = this.state.currently.isDayLight;
      isDayLight ? bgUrl = `url(${dayImgs[`./${this.state.currently.icon}.jpg`]})` :
        bgUrl = `url(${nightImgs[`./${this.state.currently.icon}.jpg`]})`
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.currently ? (
          <React.Fragment>
            <Background bgUrl={bgUrl} />
            <Wrapper>
              <WeatherInfo mainTheme weatherData={this.state.currently} />
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
