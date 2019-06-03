import React from 'react';
import Devices from '../../../assets/images/devices.png';
import DownLight from '../../../assets/images/down_light.png';
import AdvDevice from '../../../assets/images/adv_device.png';
import MkBook from '../../../assets/images/mk_book.png';
import Mouse from '../../../assets/images/portfolio_mouse.png';


class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.expand = this.expand.bind(this);
  }

  expand() {
    const { expanded } = this.state;
    if (expanded) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  }

  render() {
    const { title, textExpanded, textSmall } = this.props;
    const { expanded } = this.state;
    let worksText;
    let buttonTitle;
    if (expanded) {
      worksText = (
        <p className="worksText">{ textExpanded }</p>
      );
      buttonTitle = 'Hide';
    } else {
      worksText = (
        <p className="worksText">{ textSmall }</p>
      );
      buttonTitle = 'More Details';
    }
    return (
      <React.Fragment>
        <h4 className="works__title">{ title }</h4>
        {worksText}
        <button className="works__button" onClick={this.expand} type="button">{buttonTitle}</button>
      </React.Fragment>
    );
  }
}

function Services() {
  return (
    <React.Fragment>
      <section className="works" id="works">
        <div className="works_grey">
          <div className="landing works__block">
            <h2 className="block_heading">
              What do
              <span>we do?</span>
            </h2>
            <div className="works__wrapper">
              <div className="works__description">
                <Work
                  title="Landing pages"
                  textSmall="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus"
                  textExpanded="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus a This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus a"
                />
              </div>
              <img src={Devices} alt="Devices" />
            </div>
            <button className="down down-light" onClick="scrollDown('portfolio')" type="button"><img src={DownLight} alt="Down button" /></button>
          </div>
        </div>

        <div className="advertising works__block">
          <div className="works__wrapper">
            <img src={AdvDevice} alt="" />
            <div className="works__description works__description_right">
              <Work
                title="Advertizing"
                textSmall="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus"
                textExpanded="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus a This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus a"
              />
            </div>
          </div>
          <button className="down down-light" onClick="scrollDown('portfolio')" type="button"><img src={DownLight} alt="Down button" /></button>
        </div>
        <div className="works_grey">
          <div className="marketing works__block">
            <div className="works__wrapper">
              <div className="works__description">
                <Work
                  title="Marketing Kit"
                  textSmall="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus"
                  textExpanded="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus a This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                                    velit. Nam nec tellus a"
                />
              </div>
              <img src={MkBook} alt="" />
            </div>
            <button className="down down-light" onClick="scrollDown('portfolio')" type="button"><img src={DownLight} alt="Down button" /></button>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="block_heading">Portfolio</h2>
        <nav className="portfolio__nav">
          <ul className="portfolio__list">
            <li>All</li>
            <li>Entertainment</li>
            <li>Sport</li>
            <li>Business</li>
            <li>Building</li>
          </ul>
        </nav>
        <div className="overlay__video">
          <div className="player">
            <div className="player__close"><i className="far fa-times-circle" /></div>
            <video className="player__video viewer" src="assets/video/videoplayback.mp4">
              <track kind="captions" label="Video" />
            </video>
            <button className="hover__button toggle" type="button">
              <i className="fas fa-play hover__play" />
              <i className="fas fa-pause hover__pause" />
            </button>
            <div className="progress">
              <div className="progress_filled" />
            </div>
            <button className="player__button toggle" data-tooltip="Play" type="button">
              <i className="fas fa-play video__play" data-tooltip="Play" />
              <i className="fas fa-pause video__pause" data-tooltip="Pause" />
            </button>
            <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value="1" data-tooltip="Volume" />
            <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" value="1" data-tooltip="Speed" />
            <button data-skip="-15" className="player__button" type="button"><i className="fas fa-backward" data-tooltip="15 seconds back" /></button>
            <button data-skip="15" className="player__button" type="button"><i className="fas fa-forward" data-tooltip="15 seconds forward" /></button>
          </div>
        </div>
        <div className="portfolio__table">
          <div className="portfolio__item portfolio__bike portfolio__all portfolio__sport">
            <div className="portfolio__item_onhover">
              <p className="portfolio__title">Mountain bike</p>
              <button className="portfolio__plus" onClick="openVideoPopup()" type="button"><p>+</p></button>
            </div>
          </div>
          <div className="portfolio__item portfolio__all portfolio__entertainment" />
          <div className="portfolio__item portfolio__all portfolio__business" />
          <div className="portfolio__item portfolio__all portfolio__business" />
          <div className="portfolio__item portfolio__all portfolio__building" />
          <div className="portfolio__item portfolio__all portfolio__entertainment" />
        </div>
        <img className="portfolio__mouse" src={Mouse} alt="Mouse" />
        <button className="portfolio__button" type="button">I want landing page</button>
        <button className="down down-light" onClick="scrollDown('team')" type="button"><img src={DownLight} alt="Down button" /></button>
      </section>
    </React.Fragment>
  );
}

export default Services;
