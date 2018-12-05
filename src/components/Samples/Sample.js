import React from 'react';
import styled from 'styled-components';

const colors = {
  kick: ['#BB6666', '#AA5555'],
  snare: ['#6666BB', '#5555AA'],
  hhopen: ['#BBBB66', '#AAAA55'],
  hhclosed: ['#BBBB66', '#AAAA55'],
  tom1: ['#BB66BB', '#AA55AA'],
  tom2: ['#BB66BB', '#AA55AA'],
  aux1: ['#55BB66', '#55AA55'],
  aux2: ['#55BB66', '#55AA55'],
};

const Pad = styled.div`
  font-size: 0.5em;
  font-weight: bold;
  width: 70px;
  height: 70px;
  background: ${props => colors[props.name][0]};
  border: 5px solid #AAAAAA;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    background-color: ${props => colors[props.name][1]};
  }
`;

class Sample extends React.Component {
  clickHandler() {
    this.props.playSound(this.props.context, this.props.gain);
  }

  render() {
    return <Pad onClick={() => this.clickHandler()} name={this.props.name} />;
  }
}

export default Sample;
