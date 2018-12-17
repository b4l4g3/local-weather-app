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
        return (
            <Wrapper>
                <WeatherInfo weekDay={nextDays[0].weekDay} weatherData={nextDays[0]} />
                <Border />
                <WeatherInfo weekDay={nextDays[1].weekDay} weatherData={nextDays[1]} />
                <Border />
                <WeatherInfo weekDay={nextDays[2].weekDay} weatherData={nextDays[2]} />
            </Wrapper>
        )
    }
}

export default Forecast
