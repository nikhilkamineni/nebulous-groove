import React, { Component } from 'react';
import styled from 'styled-components';

// Mixer Styles
// eslint-disable-next-line
const MixerStyled = styled.div`
  color: #222222;
  input[type='range'] {
    -webkit-appearance: none;
    background-color: #888888;
    margin-bottom: 15px;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background-color: #888888;
  }

  input[type='range']::-webkit-slider-thumb {
    height: 20px;
    width: 10px;
    border-radius: 0px;
    background: #11BB11;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }

  input[type='range']::-moz-range-thumb {
    height: 20px;
    width: 10px;
    border-radius: 0px;
    background: #11BB11;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
`;

// Mixer Component
class Mixer extends Component {
  render() {
    return (
      <MixerStyled>

        delay volume:{' '}
        <input
          type='range'
          name='DelayVolume'
          onChange={this.props.mixerHandler}
        /><br />

        delay time:{' '}
        <input
          type='range'
          name='DelayTime'
          onChange={this.props.mixerHandler}
        /><br />

        delay feedback:{' '}
        <input
          type='range'
          name='DelayFeedback'
          onChange={this.props.mixerHandler}
        /><br />

        reverb volume:{' '}
        <input type='range'
          name='ReverbVolume'
          onChange={this.props.mixerHandler}
        /><br />

      </MixerStyled>
    );
  }
}

export default Mixer;
