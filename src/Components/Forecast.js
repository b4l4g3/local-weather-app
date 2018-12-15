import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherInfo from './WeatherInfo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Border = styled.div`
  border: 1.5px solid #dee2e2;
  border-radius: 5px;
  height: 100px;
  opacity: 0.65;
`

export class Forecast extends Component {
    render() {
        const nextDays = this.props.nextDays;
        const { nextDay1, nextDay2, nextDay3 } = nextDays;
        return (
            <Wrapper>
                <WeatherInfo weekDay={nextDay1.weekDay} weatherData={nextDay1} />
                <Border />
                <WeatherInfo weekDay={nextDay2.weekDay} weatherData={nextDay2} />
                <Border />
                <WeatherInfo weekDay={nextDay3.weekDay} weatherData={nextDay3} />
            </Wrapper>
        )
    }
}

export default Forecast
