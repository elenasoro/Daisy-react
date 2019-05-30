import React from "react";
import Clients from '../../../assets/images/clients.png';
import Branding from '../../../assets/images/branding.png';
import Marketing from '../../../assets/images/marketing.png';
import Adv from '../../../assets/images/adv.png';
import DownLight from '../../../assets/images/down_light.png';
import Down from '../../../assets/images/down.png'
import IconLight from '../../../assets/images/icon_light.png';
import IconComp from '../../../assets/images/icon_comp.png';
import IconMan from '../../../assets/images/icon_man.png';
import IconLike from '../../../assets/images/icon_like.png';
import IconRocket from '../../../assets/images/icon_rocket.png';





class Portfolio extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
      return(
        <React.Fragment>

          <section class="expand" id="expand">
            <div class="expand_frame">
                <h2><span>Expand </span>Your Business</h2>
                <button class="expand__button button_transparent" >Join Us</button>
            </div>
           <button class="down"><img src={Down} alt="Down button"></img></button>
        </section>

          <section class="benefits" id="benefits">
            <h2 class="block_heading">What can <span>you receive?</span></h2>
            <div class="block_description">
                <p>Daisy is sagittis sem nibh id elit. Duis sed odio 
                    sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                </p>
            </div>
            
            <div class="benefits__wrapper container">
                <div class="row">
                        <div class="benefits__item col-sm-12 col-md-3">
                                <img src={Clients} alt="Clients"></img>
                                <h3>Clients</h3>
                                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
                            </div>
                            <div class="benefits__item col-sm-12 col-md-3">
                                    <img src={Branding} alt="Clients"></img>
                                    <h3>Branding</h3>
                                    <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
                            </div>
                            <div class="benefits__item col-sm-12 col-md-3">
                                    <img src={Marketing} alt="Clients"></img>
                                    <h3>Marketing</h3>
                                    <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
                            </div>
                            <div class="benefits__item col-sm-12 col-md-3">
                                    <img src={Adv} alt="Clients"></img>
                                    <h3>Adv.</h3>
                                    <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
                            </div>
                </div> 
            </div>
            <button class="down down-light" onclick="scrollDown('expand')"><img src={DownLight} alt="Down button"></img></button>
            
        </section>

        <section class="process" id="process">
                <h2 class="block_heading">Our <span>process</span></h2>
                <div class="block_description">
                    <p>Daisy is sagittis sem nibh id elit. Duis sed odio 
                        sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    </p>
                </div>
                <div class="hexes_wrapper">
                    
                    <div class="hex hex1">
                            <div class="hex__icon">
                                <img src={IconLight} alt="Light"></img>
                            </div>
                        <h4>Step <span>1</span></h4>
                        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida</p>
                    </div>
                    <div class="hex hex2">
                            <div class="hex__icon">
                                    <img src={IconComp} alt="Comp"></img>
                                </div>
                            <h4>Step <span>2</span></h4>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida</p>
                    </div>
                    <div class="hex hex3">
                            <div class="hex__icon">
                                    <img src={IconMan} alt="Man"></img>
                                </div>
                            <h4>Step <span>3</span></h4>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida</p>
                    </div>
                    <div class="hex hex-big hex4">
                            <div class="hex__icon hex__icon_big">
                                    <img src={IconLike} alt="Like"></img>
                                </div>
                            <h4>Step <span>4</span></h4>
                            <p>This is Photoshop's version  of Lorem Ipsum. 
                                Proin gravida nibh vel velit auctor aliquet. </p>
                            <div class="hex__icon hex__icon_light">
                                <img src={IconRocket} alt="Rocket"></img>
                            </div>
                    </div>
                    <div class="hex hex-big hex5">        
                    </div>
                </div>
                <button class="down down-light" ><img src={DownLight} alt="Down button"></img></button>
                    
        </section>
        </React.Fragment>
      )
  }
}




export default Portfolio;