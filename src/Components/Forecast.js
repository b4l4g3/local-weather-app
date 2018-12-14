import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherInfo from './WeatherInfo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export class Forecast extends Component {
    render() {
        const nextDays = this.props.nextDays;
        return (
            <Wrapper>
                <WeatherInfo mainTheme={true} weekDay={nextDays.nextDay1.weekDay} weatherData={nextDays.nextDay1} />
                <WeatherInfo mainTheme={true} weekDay={nextDays.nextDay2.weekDay} weatherData={nextDays.nextDay2} />
                <WeatherInfo mainTheme={true} weekDay={nextDays.nextDay3.weekDay} weatherData={nextDays.nextDay3} />
            </Wrapper>
        )
    }
}

export default Forecast
