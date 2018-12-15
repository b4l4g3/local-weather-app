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
        const { nextDay1, nextDay2, nextDay3 } = nextDays;
        return (
            <Wrapper>
                <WeatherInfo mainTheme={true} weekDay={nextDay1.weekDay} weatherData={nextDay1} />
                <WeatherInfo mainTheme={true} weekDay={nextDay2.weekDay} weatherData={nextDay2} />
                <WeatherInfo mainTheme={true} weekDay={nextDay3.weekDay} weatherData={nextDay3} />
            </Wrapper>
        )
    }
}

export default Forecast
