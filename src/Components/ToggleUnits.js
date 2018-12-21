import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const ToggleUnitsWrapper = styled.div`
  text-shadow: 0.2px 0.2px 3px #000;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 350px) {
    margin-top: -45px;
  }
`

const Unit = styled.span`
  margin: 0px 15px;
  cursor: pointer;
`

const StyledUnderline = styled(posed.hr({
  right: {x: -22.5},
  left: {x: 26.5}
}))`
  height: .25rem;
  width: 25%;
  background: #dee2e2;
  border: none;
`;

class ToggleUnits extends Component {

  render() {
    const handleCelsiusChange = this.props.handleCelsiusChange;
    const handleFahrenheitChange = this.props.handleFahrenheitChange;
    const celsiusStyle = this.props.celsiusStyle;
    const fahrenheitStyle = this.props.fahrenheitStyle;
    const slidePosition = this.props.slidePosition
    return (
      <ToggleUnitsWrapper>
        <Unit style={celsiusStyle} onClick={handleCelsiusChange}>°C</Unit>
        <Unit style={fahrenheitStyle} onClick={handleFahrenheitChange}>°F</Unit>
        <StyledUnderline
        pose={slidePosition}
        />
      </ToggleUnitsWrapper>
    )
  }
}

export default ToggleUnits