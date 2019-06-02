import React from 'react';
import { connect } from 'react-redux';
import { saveUserData } from '../../store/actions/saveUserData';

class Popup extends React.Component{
  constructor(props){
    super(props);
    this.saveUser = this.saveUser.bind(this);
}

  saveUser(event){
    event.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
            
    this.props.onClose();
    return this.props.addNewUser(name, email, phone);
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
    
          <form onSubmit={this.saveUser}>
            <input ref={input => this.name = input} type="text" className="name" placeholder="Name" id="user_name" name="user_name"></input> 
            <br></br>              
            <input ref={input => this.email = input} type="email" className="email" placeholder="E-mail" id="email" name="user_email"></input>  
            <br></br>    
            <input ref={input => this.phone = input} type="number" className="phone" placeholder="Phone Number" id="phone" name="user_phone"></input>  
            <br></br> 
            <button type='submit' className="submit">Submit</button>
          </form>
                                
        </div>           
      </div>
    </div>
    );

    if(!this.props.isPopupDisplayed){
      dialog = null;
    }

    return (
      <div>
        {dialog}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newUser: state.newUserReducer.newUser  
  }
};
  
function mapDispatchToProps(dispatch){
  return {
    addNewUser: (name, email, phone) => {
      dispatch(saveUserData(name, email, phone))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);

