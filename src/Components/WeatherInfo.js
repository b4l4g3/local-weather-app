import React, { Component } from 'react'
import styled from 'styled-components';
import { formatAMPM } from './../helper.js';

const colorIron = '#dee2e2';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cetner;
  justify-content: center;
  color: ${colorIron};
  text-shadow: 0.2px 0.2px 3px #000;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
`
const Icon = styled.img`
  height: ${props => props.mainTheme ? '160px' : '120px'};
  margin-bottom: ${props => props.mainTheme ? '-25px' : '-15px'};
`
const Temperature = styled.p`
  font-size: ${props => props.mainTheme ? '70px' : '24px'};
  padding-left: ${props => props.mainTheme ? '26px' : '0px'}
  margin: 0px 0px;
  letter-spacing: ${props => props.mainTheme ? '2px' : '0.5px'};
  font-weight: ${props => props.mainTheme ? '400' : '600'};

  &::after {
    content:"°"
  }
`
const Type = styled.p`
  margin-top: ${props => props.mainTheme ? '0px' : '12px'};
  font-size: ${props => props.mainTheme ? '22px' : '15px'};
  letter-spacing: ${props => props.mainTheme ? '1px' : '0.5px'};
`
const Today = styled.p`
  margin: 5px 0px;
  font-size: 14px;
  letter-spacing: 0.5px;
`
const WeekDay = styled.p`
  margin-bottom: 5px 0px;
  font-size: 18.5px;
`
const reqSvgs = require.context('./Icons', true, /\.svg$/)

const svgs = reqSvgs
  .keys()
  .reduce((images, path) => {
    images[path] = reqSvgs(path)
    return images
  }, {})

export class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);
    this.state = { 
      time: formatAMPM(new Date())
     }
  }

  updateDate() {
    this.setState({
      time: formatAMPM(new Date())
    })
  }

  componentDidMount() {
    setInterval(this.updateDate, 1000)
  }

  render() {
    const weatherData = this.props.weatherData;
    const weekDay = this.props.weekDay;
    const mainTheme = this.props.mainTheme;
    return (
      <Wrapper>
        {!(mainTheme) ? (
          <WeekDay>{weekDay}</WeekDay>
        ) : (
          <></>
          )}
        <Icon mainTheme={mainTheme} src={svgs[`./${weatherData.icon}.svg`]} />
        <Temperature mainTheme={mainTheme}>{Math.round(weatherData.temp)}</Temperature>
        {mainTheme ? (
          <Today>Today {this.state.time}</Today>
        ) : (
            <></>
          )}
        <Type mainTheme={mainTheme} >{weatherData.type}</Type>
      </Wrapper>
    )
  }
}

export default WeatherInfo
