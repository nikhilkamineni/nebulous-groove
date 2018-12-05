import React from 'react';
import Sequence from './Sequence'; // eslint-disable-line
import Timeline from './Timeline'; // eslint-disable-line
import styled from 'styled-components'; // eslint-disable-line
import {
  kick,
  snare,
  hhopen,
  hhclosed,
  tom1,
  tom2,
  aux1,
  aux2
} from '../../sounds';

const sounds = {
  kick,
  snare,
  hhopen,
  hhclosed,
  tom1,
  tom2,
  aux1,
  aux2
};

const colors = {
  kick: '#BB6666',
  snare: '#6666BB',
  hhopen: '#BBBB66',
  hhclosed: '#BBBB66',
  tom1: '#BB66BB',
  tom2: '#BB66BB',
  aux1: '#55BB66',
  aux2: '#005500'
};

class Sequencer extends React.Component {
  render() {
    return (
      <div style={{ width: '950px' }}>

        {Object.keys(sounds).map((name, index) => {
          return (
            <div
              key={index}
              style={{
                borderLeft: `15px solid ${colors[name]}`,
                marginTop: '5px'
              }}
            >
              <Sequence
                key={index}
                name={name}
                playSound={sounds[name]}
                context={this.props.context}
                gain={this.props.gains[name]}
                clear={this.props.clear}
                unsetClear={this.props.unsetClear}
                currentBeat={this.props.currentBeat}
                sequenceLength={this.props.sequenceLength}
              />
            </div>
          );
        })}
        <Timeline
          currentBeat={this.props.currentBeat}
          sequenceLength={this.props.sequenceLength}
          style={{ width: '800px' }}
        />
      </div>
    );
  }
}

export default Sequencer;
