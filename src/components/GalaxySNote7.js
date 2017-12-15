import React from 'react';
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from '../assets/exclamation.png';

export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panicked: this.props.environment === 'inhospitable'
    };

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener(
      'ended',
      () => {
        this.throwAFit();
      },
      false
    );
  }

  throwAFit = () => {
    this.props.alterEnvironment('inhospitable');
  };

  relax = () => {
    const newState = { panicked: false };
    this.setState(newState);
  };

  exclaim = () => {
    if (this.state.panicked) return;
    this.setState({ panicked: true });
    setTimeout(this.relax, 3500);
    this.exclaimAudio.play();
    this.squeelAudio.play();
  };

  panic = () => (
    <img
      id="galaxy-exclamation"
      className="exclamation"
      src={exclamation}
      alt=""
    />
  );

  render() {
    return (
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {this.state.panicked ? this.panic() : null}
      </div>
    );
  }
}
