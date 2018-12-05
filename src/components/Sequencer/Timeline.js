import React from 'react';
import styled from 'styled-components';

const LedContainer = styled.div`
  display: flex;
  padding-left: 15px;
  padding-top: 5px;
`;

const Led = styled.div`
  height: 10px;
  width: 50px;
  background: ${props => (props.active ? '#00BB00' : '#999999')};
  margin: 0 3px;
`;

class Timeline extends React.Component {
  render() {
    return (
      <LedContainer>
        {[...Array(this.props.sequenceLength).keys()].map((value, index) => {
          return <Led key={index} active={this.props.currentBeat === index} />;
        })}
      </LedContainer>
    );
  }
}

export default Timeline;
