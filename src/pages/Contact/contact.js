import React from 'react';
import { connect } from 'react-redux';
import Steve from '../../../assets/images/steve.png';
import Hellen from '../../../assets/images/hellen.png';
import Quotes from '../../../assets/images/testimonials_quotes.png';
import Pic from '../../../assets/images/testimonials_pic.png';
import Left from '../../../assets/images/left.png';
import Right from '../../../assets/images/right.png';
import Team from '../../containers/Team/team';


function Contact(props) {
  const { newUser } = props;
  return (
    <React.Fragment>
      <p>
        Hello,
        {newUser.name}
        ! (
        {newUser.email}
        ,
        {newUser.phone}
        )
      </p>
      <Team userName={newUser.name}/>
      <section className="testimonials" id="testimonials">
        <div className="testimonials__quotes">
          <img src={Quotes} alt="Quotes" />
        </div>
        <div className="testimonials__carousel-container">
          <div className="testimonials__carousel-slides">
            <div className="testimonials__item testimonials_fade testimonials__item_displayed">
              <p className="testimonials__text">
                This is Photoshop
                {'&apos;'}
                s version  of Lorem Ipsum. Proin gravida nibh vel
                velit auctor aliquet. Aenean sollicitudin,
                lorem quis bibendum auctor, nisi elit conse
              </p>
              <img src={Pic} alt="Alan" />
              <div className="testimonias__position">
                <h5>
                  <span>Alan</span>
                  Richman
                </h5>
                <p>
                  CEO of Romashka
                </p>
              </div>
            </div>
            <div className="testimonials__item testimonials_fade testimonials__item_displayed">
              <p className="testimonials__text">
                This is Photoshop
                {'&apos;'}
                s version  of Lorem Ipsum. Proin gravida nibh vel
                velit auctor aliquet. Aenean sollicitudin,
                lorem quis bibendum auctor, nisi elit conse
              </p>
              <img src={Hellen} alt="Hellen" />
              <div className="testimonias__position">
                <h5>
                  <span>Hellen</span>
                  Richman
                </h5>
                <p>
                  CEO of Romashka
                </p>
              </div>
            </div>
            <div className="testimonials__item testimonials_fade testimonials__item_displayed">
              <p className="testimonials__text">
                This is Photoshop
                {'&apos;'}
                s version  of Lorem Ipsum. Proin gravida nibh vel
                velit auctor aliquet. Aenean sollicitudin,
                lorem quis bibendum auctor, nisi elit conse
              </p>
              <img src={Steve} alt="Steve" />
              <div className="testimonias__position">
                <h5>
                  <span>Steve</span>
                  Richman
                </h5>
                <p>
                  CEO of Romashka
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials__nav">
            <button className="testimonials__button testimonials__button_previous" id="prev" type="button">
              <img src={Left} alt="Left" />
            </button>
            <button className="testimonials__button testimonials__button_next" id="next" type="button">
              <img src={Right} alt="Right" />
            </button>
          </div>
        </div>
      </section>

      <section className="map" id="contact">
        <div className="map__address">
          <h5>Daisy</h5>
          <p>
            615 4th Ave S, Jacksonville Beach, FL 32250
          </p>
        </div>
        <div className="map__location" />
      </section>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    newUser: state.newUserReducer.newUser,
  };
};
    
export default connect(mapStateToProps)(Contact);
