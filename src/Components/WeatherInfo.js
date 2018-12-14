import React, { Component } from 'react'
import styled from 'styled-components';

const colorIron = '#dee2e2';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cetner;
  justify-content: center;
  color: ${colorIron}
`
const Icon = styled.img`

`
const Temperature = styled.p`
  text-align: center;
`

const Type = styled.p`
  text-align: center;
`
const WeekDay = styled.p`
  text-align: center;
`

const reqSvgs = require.context('./Icons', true, /\.svg$/)

const svgs = reqSvgs
  .keys()
  .reduce((images, path) => {
    images[path] = reqSvgs(path)
    return images
  }, {})

export class WeatherInfo extends Component {
  render() {
    const weatherData = this.props.weatherData;
    const weekDay = this.props.weekDay;
    const mainTheme = this.props.mainTheme;
    return (
      <Wrapper>
        {weekDay ? (
          <WeekDay>{weekDay}</WeekDay>
        ) : (
            <></>
          )}
        <Icon src={svgs[`./${weatherData.icon}.svg`]} />
        <Temperature mainTheme={mainTheme}>{weatherData.temp}</Temperature>
        <Type>{weatherData.type}</Type>
      </Wrapper>
    )
  }
}

export default WeatherInfo
