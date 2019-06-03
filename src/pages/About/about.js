import React from 'react';
import Mouse from '../../../assets/images/mouse.png';
import Down from '../../../assets/images/down.png';
import Popup from '../../containers/Popup/popup';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupDisplayed: false,
    };
    this.onClose = this.onClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onClose() {
    this.setState({ isPopupDisplayed: false });
  }

  handleClick() {
    this.setState({ isPopupDisplayed: true });
  }

  render() {
    const { isPopupDisplayed } = this.state;
    return (
      <main>
        <div className="about__container">
          <h1 className="about__title">
            <span>Clients </span>
            in your business
          </h1>
          <p className="about__explanation">Your clients on the internet. Learn how to receive them.</p>
          <button className="get-client button_transparent" id="get-client" onClick={this.handleClick} type="button">I want clients</button>
          <img className="mouse" src={Mouse} alt="Mouse" />
          <button className="down" type="button">
            <img src={Down} alt="Down button" />
          </button>
          <Popup isPopupDisplayed={isPopupDisplayed} onClose={this.onClose} />
        </div>
      </main>
    );
  }
}

export default About;
