import React from 'react';
import styled from 'styled-components';

const LedContainer = styled.div`
  display: flex;
`;

// border: 5px solid ${props => colors[props.name]};
const Led = styled.div`
  height: 50px;
  width: 50px;
  margin: 0 3px;
  background: ${props => (props.on ? '#4AA0F1' : '#888888')};
  &:hover {
    cursor: pointer;
    background-color: ${props => (props.on ? '#5fd3f7' : '#616161')};
  }
`;

class Timeline extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      noteOn: []
    };
  }

  componentDidUpdate() {
    if (this.state.noteOn[this.props.currentBeat]) {
      this.props.playSound(this.props.context, this.props.gain);
    }
    if (this.props.clear) {
      const noteOn = [...Array(this.props.sequenceLength).keys()].fill(false);
      this.setState({
        noteOn
      });
      this.props.unsetClear();
    }
  }

  componentDidMount() {
    // const noteOn = [...Array(this.props.sequenceLength).keys()].fill(false);
    const noteOn = [...Array(this.props.sequenceLength).keys()].map(
      el => (Math.random() > 0.3 ? false : true)
    );
    this.setState({
      noteOn
    });
  }

  handleClick = index => {
    let { noteOn } = this.state;
    noteOn[index] = !noteOn[index];
    this.setState({
      noteOn
    });
  };

  render() {
    return (
      <LedContainer>
        {this.state.noteOn.map((note, index) => {
          return (
            <Led
              key={index}
              on={this.state.noteOn[index]}
              onClick={() => this.handleClick(index)}
              name={this.props.name}
            />
          );
        })}
      </LedContainer>
    );
  }
}

export default Timeline;
