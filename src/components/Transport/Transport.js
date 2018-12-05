import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
const TransportContainer = styled.div`
  width: 950px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  color: #AAAAAA;
`;

// eslint-disable-next-line
const ButtonStyled = styled.div`
  font-size: 1.5em;
  color: #333333;
  height: 40px;
  background: #AAAAAA;
  padding: 0px 15px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    color: #BB3333;
  }
`;

// eslint-disable-next-line
const BPMLabel = styled.div`
  font-size: 1.5em;
  color: #333333;
  height: 40px;
  margin-left: 30px;
  margin-right: 5px;
`;

// eslint-disable-next-line
const BPM = styled.input`
  font-size: 1.5em;
  border: none;
  color: #333333;
  height: 40px;
  background: #CCCCCC;
  padding: 4px;
  margin-right: 30px;
  max-width: 50px;
  &:hover {
    background-color: #999999;
  }
  &:focus {
    border-color: none;
  }
  &:active {
    border: none;
  }
`;

// eslint-disable-next-line
const PadsToggle = styled.div`
  font-size: 1.5em;
  color: #333333;
  height: 40px;
  background: #AAAAAA;
  padding: 0px 15px;
  margin-left: 100px;
  &:hover {
    cursor: pointer;
    color: #BB3333;
  }
`;


class Transport extends React.Component {
  render() {
    return (
      <TransportContainer>
        <ButtonStyled onClick={this.props.play}>play</ButtonStyled>
        <ButtonStyled onClick={this.props.pause}>pause</ButtonStyled>
        <ButtonStyled onClick={this.props.stop}>stop</ButtonStyled>
        <ButtonStyled onClick={() => this.props.clearSequences()}>clear</ButtonStyled>
        <BPMLabel>bpm</BPMLabel>
        <BPM defaultValue="40" onChange={this.props.changeBPM}/>
        <PadsToggle onClick={this.props.togglePads}>controls</PadsToggle>
      </TransportContainer>
    );
  }
}

export default Transport;
