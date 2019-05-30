import React from "react";
import Devices from '../../../assets/images/devices.png';
import DownLight from '../../../assets/images/down_light.png';
import AdvDevice from '../../../assets/images/adv_device.png';
import MkBook from '../../../assets/images/mk_book.png';
import Mouse from '../../../assets/images/portfolio_mouse.png';


class Work extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    };
    this.expand = this.expand.bind(this);
}

expand(){
  if(this.state.expanded){
    this.setState({expanded: false})
  } else {
    this.setState({expanded: true})
  }
}

render(){
  let works__text;
  let button__title;
  if(this.state.expanded){
    works__text = (
      <p class="works__text">{this.props.text_expanded}</p>
    );
    button__title = 'Hide';
  } else {
    works__text = (
      <p class="works__text">{this.props.text_small}</p>
    );
    button__title = 'More Details';
  }
  return (
    <React.Fragment>
      <h4 class="works__title">{this.props.title}</h4>
      {works__text}
      <button class="works__button" onClick={this.expand}>{button__title}</button>
      </React.Fragment>
  )
}
}

class Services extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
    return(
      <React.Fragment>
        <section class="works" id="works">
            <div class="works_grey">
                    <div class="landing works__block">
                            <h2 class="block_heading">What do <span>we do?</span></h2>
                            <div class="works__wrapper">
                                <div class="works__description">
                                    <Work 
                                    title="Landing pages"
                                    text_small="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus"
                                    text_expanded="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus a This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus a"
                                    />
                                </div>
                                <img src={Devices} alt="Devices"></img>
                            </div>
                           <button class="down down-light" onclick="scrollDown('portfolio')"><img src={DownLight} alt="Down button"></img></button>
                            
                        </div>
            </div>
            
            

            <div class="advertising works__block">
                
                        <div class="works__wrapper">
                                <img src={AdvDevice} alt=""></img>
                                <div class="works__description works__description_right">
                                <Work 
                                    title="Advertizing"
                                    text_small="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus"
                                    text_expanded="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus a This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus a"
                                  />
                                </div>         
                        </div>
                       <button class="down down-light" onclick="scrollDown('portfolio')"><img src={DownLight} alt="Down button"></img></button>
                        
                  
            </div>

            <div class="works_grey"> 
            <div class="marketing works__block">
                   
                          
                            <div class="works__wrapper">
                                <div class="works__description">
                                <Work 
                                    title="Marketing Kit"
                                    text_small="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus"
                                    text_expanded="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus a This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit 
                                    auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis 
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum 
                                    velit. Nam nec tellus a"
                                  />
                                </div>
                                <img src={MkBook} alt=""></img>
                            </div>
                            <button class="down down-light" onclick="scrollDown('portfolio')"><img src={DownLight} alt="Down button"></img></button>
                            
                    </div>
            </div>
        </section>

        <section class="portfolio" id="portfolio">
            <h2 class="block_heading">Portfolio</h2>
            <nav class="portfolio__nav">
                <ul class="portfolio__list">
                    <li onclick="applyFilter('all')">All</li>
                    <li onclick="applyFilter('entertainment')">Entertainment</li>
                    <li onclick="applyFilter('sport')">Sport</li>
                    <li onclick="applyFilter('business')">Business</li>
                    <li onclick="applyFilter('building')">Building</li>
                </ul>
            </nav>

            <div class="overlay__video">
                <div class="player">
                    <div class="player__close" onclick="closeVideoPopup()"><i class="far fa-times-circle"></i></div>
                    <video class="player__video viewer" src="assets/video/videoplayback.mp4"></video>
                    <button class="hover__button toggle">
                        <i class="fas fa-play hover__play"></i>
                        <i class="fas fa-pause hover__pause"></i>
                    </button>
                        <div class="progress">
                            <div class="progress_filled"></div>
                        </div>
                    
                        <button class="player__button toggle" data-tooltip="Play"><i class="fas fa-play video__play" data-tooltip="Play"></i><i class="fas fa-pause video__pause" data-tooltip="Pause"></i></button>
                        <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1" data-tooltip="Volume"></input>
                        <input type="range" name="playbackRate" class="player__slider" min='0.5' max="2" step="0.1" value="1" data-tooltip="Speed"></input>
                        <button data-skip="-15" class="player__button"><i class="fas fa-backward" data-tooltip="15 seconds back"></i></button>
                        <button data-skip="15" class="player__button"><i class="fas fa-forward" data-tooltip="15 seconds forward"></i></button>
                </div>
            </div>


            <div class="portfolio__table">
                <div class="portfolio__item portfolio__bike portfolio__all portfolio__sport">
                    <div class="portfolio__item_onhover">
                        <p class="portfolio__title">Mountain bike</p>
                        <button class="portfolio__plus" onclick="openVideoPopup()"><p>+</p></button> 
                    </div>
                </div>
                <div class="portfolio__item portfolio__all portfolio__entertainment"></div>
                <div class="portfolio__item portfolio__all portfolio__business"></div>
                <div class="portfolio__item portfolio__all portfolio__business"></div>
                <div class="portfolio__item portfolio__all portfolio__building"></div>
                <div class="portfolio__item portfolio__all portfolio__entertainment"></div>
            </div>
            <img class="portfolio__mouse" src={Mouse} alt="Mouse"></img>
            <button class="portfolio__button">I want landing page</button>
           <button class="down down-light" onclick="scrollDown('team')"><img src={DownLight} alt="Down button"></img></button>
            
        </section>
      </React.Fragment>
    )
  }

}

export default Services;