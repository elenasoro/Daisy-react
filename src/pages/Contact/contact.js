import React from 'react';
import Steve from '../../../assets/images/steve.png';
import Hellen from '../../../assets/images/hellen.png';
import Quotes from '../../../assets/images/testimonials_quotes.png';
import Pic from '../../../assets/images/testimonials_pic.png';
import Left from '../../../assets/images/left.png';
import Right from '../../../assets/images/right.png';
import Team from '../../containers/Team/team';
import { connect } from 'react-redux';


class Contact extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
    return(
   
      <React.Fragment>
         <p>Hello, {this.props.newUser.name}! ({this.props.newUser.email}, {this.props.newUser.phone})</p>
        <Team />
        <section class="testimonials" id="testimonials">
            
            <div class="testimonials__quotes">
                <img src={Quotes} alt="Quotes"></img>
            </div>

            <div class="testimonials__carousel-container">

                <div class="testimonials__carousel-slides">
                        <div class="testimonials__item testimonials_fade testimonials__item_displayed">
                                <p class="testimonials__text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel 
                                    velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conse</p>
                                <img src={Pic} alt="Alan"></img>
                                <div class="testimonias__position">
                                    <h5><span>Alan</span> Richman</h5>
                                    <p>CEO of Romashka</p>
                                </div>
                        </div>
                        <div class="testimonials__item testimonials_fade testimonials__item_displayed">
                                <p class="testimonials__text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel 
                                    velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conse</p>
                                <img src={Hellen} alt="Hellen"></img>
                                <div class="testimonias__position">
                                    <h5><span>Hellen</span> Richman</h5>
                                    <p>CEO of Romashka</p>
                                </div>
                        </div>
                        <div class="testimonials__item testimonials_fade testimonials__item_displayed">
                                <p class="testimonials__text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel 
                                    velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conse</p>
                                <img src={Steve} alt="Steve"></img>
                                <div class="testimonias__position">
                                    <h5><span>Steve</span> Richman</h5>
                                    <p>CEO of Romashka</p>
                                </div>
                        </div>
                </div>
                    
                <div class="testimonials__nav">
                    <button class="testimonials__button testimonials__button_previous" id='prev'><img src={Left} alt="Left"></img></button>
                    <button class="testimonials__button testimonials__button_next" id='next'><img src={Right} alt="Right"></img></button>
                            
                </div>

            </div>
            
        </section>

        <section class="map" id="contact">
            <div class="map__address">
                <h5>Daisy</h5>
                <p>615 4th Ave S, Jacksonville Beach, FL 32250</p>
            </div>
            <div class="map__location">

            </div>
        </section>

      </React.Fragment>
  
    )
  }
}

const mapStateToProps = (state) => {
    return {
      newUser: state.newUserReducer.newUser  
    }
  };

export default connect(mapStateToProps)(Contact);

