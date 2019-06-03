import React from 'react';
import Clients from '../../../assets/images/clients.png';
import Branding from '../../../assets/images/branding.png';
import Marketing from '../../../assets/images/marketing.png';
import Adv from '../../../assets/images/adv.png';
import DownLight from '../../../assets/images/down_light.png';
import Down from '../../../assets/images/down.png';
import IconLight from '../../../assets/images/icon_light.png';
import IconComp from '../../../assets/images/icon_comp.png';
import IconMan from '../../../assets/images/icon_man.png';
import IconLike from '../../../assets/images/icon_like.png';
import IconRocket from '../../../assets/images/icon_rocket.png';


function Portfolio() {
  return (
    <React.Fragment>
      <section className="expand" id="expand">
        <div className="expand_frame">
          <h2>
            <span>Expand </span>
            Your Business
          </h2>
          <button className="expand__button button_transparent" type="button">Join Us</button>
        </div>
        <button className="down" type="button"><img src={Down} alt="Down button" /></button>
      </section>

      <section className="benefits" id="benefits">
        <h2 className="block_heading">
          What can
          <span>you receive?</span>
        </h2>
        <div className="block_description">
          <p>
            Daisy is sagittis sem nibh id elit. Duis sed odio
            sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
          </p>
        </div>
        <div className="benefits__wrapper container">
          <div className="row">
            <div className="benefits__item col-sm-12 col-md-3">
              <img src={Clients} alt="Clients" />
              <h3>Clients</h3>
              <p>
                This is Photoshop
                {'&apos;'}
                s version  of Lorem Ipsum.
                Proin gravida nibh vel velit auctor aliquet. Aenean
              </p>
            </div>
            <div className="benefits__item col-sm-12 col-md-3">
              <img src={Branding} alt="Clients" />
              <h3>Branding</h3>
              <p>
                This is Photoshop
                {'&apos;'}
                s version  of Lorem Ipsum.
                Proin gravida nibh vel velit auctor aliquet. Aenean
              </p>
            </div>
            <div className="benefits__item col-sm-12 col-md-3">
              <img src={Marketing} alt="Clients" />
              <h3>Marketing</h3>
              <p>
                This is Photoshop
                {'&apos;'}
                s version  of Lorem Ipsum.
                Proin gravida nibh vel velit auctor aliquet. Aenean
              </p>
            </div>
            <div className="benefits__item col-sm-12 col-md-3">
              <img src={Adv} alt="Clients" />
              <h3>Adv.</h3>
              <p>
                This is Photoshop
                {'&apos;'}
                s version  of Lorem Ipsum.
                Proin gravida nibh vel velit auctor aliquet. Aenean
              </p>
            </div>
          </div>
        </div>
        <button className="down down-light" onClick="scrollDown('expand')" type="button"><img src={DownLight} alt="Down button" /></button>
      </section>

      <section className="process" id="process">
        <h2 className="block_heading">
          Our
          <span>process</span>
        </h2>
        <div className="block_description">
          <p>
            Daisy is sagittis sem nibh id elit. Duis sed odio
            sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit.
          </p>
        </div>
        <div className="hexes_wrapper">
          <div className="hex hex1">
            <div className="hex__icon">
              <img src={IconLight} alt="Light" />
            </div>
            <h4>
              Step
              <span>1</span>
            </h4>
            <p>
              This is Photoshop
              {'&apos;'}
              s version  of Lorem Ipsum. Proin gravida
            </p>
          </div>
          <div className="hex hex2">
            <div className="hex__icon">
              <img src={IconComp} alt="Comp" />
            </div>
            <h4>
              Step
              <span>2</span>
            </h4>
            <p>
              This is Photoshop
              {'&apos;'}
              s version  of Lorem Ipsum. Proin gravida
            </p>
          </div>
          <div className="hex hex3">
            <div className="hex__icon">
              <img src={IconMan} alt="Man" />
            </div>
            <h4>
              Step
              <span>3</span>
            </h4>
            <p>
              This is Photoshop
              {'&apos;'}
              s version  of Lorem Ipsum. Proin gravida
            </p>
          </div>
          <div className="hex hex-big hex4">
            <div className="hex__icon hex__icon_big">
              <img src={IconLike} alt="Like" />
            </div>
            <h4>
              Step
              <span>4</span>
            </h4>
            <p>
              This is Photoshop
              {'&apos;'}
              s version  of Lorem Ipsum.
              Proin gravida nibh vel velit auctor aliquet.
            </p>
            <div className="hex__icon hex__icon_light">
              <img src={IconRocket} alt="Rocket" />
            </div>
          </div>
          <div className="hex hex-big hex5" />
        </div>
        <button className="down down-light" type="button"><img src={DownLight} alt="Down button" /></button>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;
