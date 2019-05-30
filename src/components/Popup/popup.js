import React from "react";

class Popup extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let dialog = (
            <div class="js-overlay overlay" id="overlay" >
                    <div className="popup js-popup"  id="js-popup">
                        <button className="popup__close js-close" onClick={this.props.onClose}>
                                <i className="far fa-times-circle"></i>
                        </button>
                        <div className="popup__content">
    
                            <p>Fill in the form and we will call you back</p>
    
                            {/* <form action="/submit" method="GET"> */}
                                <input type="text" className="name" placeholder="Name" id="user_name" name="user_name"></input> 
                                <br></br>   
                                
                                <input type="email" className="email" placeholder="E-mail" id="email" name="user_email"></input>  
                                <br></br>    
    
                                <input type="number" className="phone" placeholder="Phone Number" id="phone" name="user_phone"></input>  
                                <br></br> 
    
                                <button type='submit' className="submit" >Submit</button>
                            {/* </form> */}
                                
                        </div>           
                    </div>
                </div>
        );

        if(!this.props.isPopupDisplayed){
            dialog = null;
        }

        return  (
            <div>
                {dialog}
            </div>
            
        )
    }
}

export default Popup;