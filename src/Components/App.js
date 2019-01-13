import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { convertTemp, dataFetch, toCelsius, toFahrenheit } from './../helper.js';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';
import ToggleUnits from './ToggleUnits';
import { pleaseWait } from "please-wait";


let loaded = false;


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
  filter: blur(1.5px);
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  overflow: hidden;
  padding: 5%;

  @media (min-width: 700px) {
    padding: 2%;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.state = {
      scale: 'f',
      style: {
        celsius: { color: `#8c8c8c` },
        fahrenheit: { color: `#dee2e2` }
      },
      pose: 'left'
    }
  }

  handleFahrenheitChange() {
    if (this.state.scale === 'c') {
      convertTemp(this.state, toFahrenheit);
      this.setState({
        scale: 'f',
        style: {
          celsius: { color: `#8c8c8c` },
          fahrenheit: { color: `#dee2e2` }
        },
        pose: this.state.pose === 'left' ? 'right' : 'left'
      })
    } else {
      return;
    }
  }

  handleCelsiusChange() {
    if (this.state.scale === 'f') {
      convertTemp(this.state, toCelsius);
      this.setState({
        scale: 'c',
        style: {
          celsius: { color: `#dee2e2` },
          fahrenheit: { color: `#8c8c8c` }
        },
        pose: this.state.pose === 'left' ? 'right' : 'left'
      })
    } else {
      return;
    }
  }

  componentDidMount() {
    //
    if (loaded === false) {
      window.loading_screen = pleaseWait({
        logo: "./Icons/favicon.ico",
        backgroundColor: '#ededed',
        loadingHtml: `
        <p class="pre-loader-text">Fetching weather information. </p>
        <p class="pre-loader-text">It may take a few seconds...</p>
        <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
        </div>`
      });
    }
    // Get data from the weather API  -   [Function's location: ./../helper.js]
    dataFetch(this, window, loaded);

    //;
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.currently ? (
          <React.Fragment>
            <Background bgUrl={this.state.bgUrl} />
            <Wrapper>
              <ToggleUnits
                slidePosition={this.state.pose}
                celsiusStyle={this.state.style.celsius}
                fahrenheitStyle={this.state.style.fahrenheit}
                handleCelsiusChange={this.handleCelsiusChange}
                handleFahrenheitChange={this.handleFahrenheitChange}
              >
              </ToggleUnits>
              <WeatherInfo
                celsiusChange={this.handleCelsiusChange}
                fahrenheitChange={this.handleFahrenheitChange}
                mainTheme
                weatherData={this.state.currently.today}
              />
              <Forecast nextDays={this.state.nextDays} />
            </Wrapper>
          </React.Fragment>
        ) : (
            // TODO: Add style to this.
            <p>Loading.</p>
          )}
      </React.Fragment>
    );
  }
}

export default App;
