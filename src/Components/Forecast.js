import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherInfo from './WeatherInfo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Border = styled.div`
  border-left: 3.5px solid #dee2e2;
  border-radius: 5px;
  height: 100px;
  opacity: 0.65;

  @media (max-width: 350px) {
   display: none;
  }
`



export class Forecast extends Component {
    render() {
        const nextDays = this.props.nextDays;
        let counter = 0;
        const nextDaysComps = []
        nextDays.forEach((day) => {
            const comp = <React.Fragment key={day.weekDay}>
                {!(nextDays[0] === day) ? (
                    <Border />
                ) : (
                        <></>
                    )}
                <WeatherInfo weekDay={day.weekDay} weatherData={day} />
            </React.Fragment>;
            counter++;
            if (window.innerWidth < 700 && counter > 3) {
                return;
            }
            switch (true) {
                case window.innerWidth < 890 && counter >= 6:
                    return;
                case window.innerWidth < 770 && counter >= 5:
                    return;
                case window.innerWidth < 650 && counter >= 4:
                    return;
                default:
                    nextDaysComps.push(comp);
            }
        });
        return (
            <Wrapper>
                {nextDaysComps}
            </Wrapper>
        )
    }
}

export default Forecast
