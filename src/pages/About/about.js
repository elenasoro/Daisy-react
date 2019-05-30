import React from "react";
import Mouse from '../../../assets/images/mouse.png';
import Down from '../../../assets/images/down.png';
import Popup from '../../components/Popup/popup';



class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPopupDisplayed: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

   handleClick(){
       this.setState({isPopupDisplayed: true})
   }

   onClose(){
        this.setState({isPopupDisplayed: false})
   }

    render(){
        return(
            <main>
            <div className="about__container">
                <h1 className="about__title"><span>Clients </span>in your business</h1>
                <p className="about__explanation">Your clients on the internet. Learn how to receive them.</p>
                <button className="get-client button_transparent" id="get-client" onClick={this.handleClick}>I want clients</button>
                <img className="mouse" src={Mouse} alt="Mouse"></img>
                <button className="down">
                    <img src={Down} alt="Down button"></img>
                </button>
                <Popup isPopupDisplayed={this.state.isPopupDisplayed} onClose={this.onClose}/>
               
            </div>
        </main>
        )
    }
}


export default About;