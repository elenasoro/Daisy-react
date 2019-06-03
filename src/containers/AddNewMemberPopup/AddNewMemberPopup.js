import React from 'react';
import { connect } from 'react-redux';
import addNewMember from '../../store/actions/actionAddNewMember';

class AddNewMemberPopup extends React.Component{
  constructor(props){
    super(props);
    this.addMember = this.addMember.bind(this);
}

  addMember(event){
    event.preventDefault();

    const name = this.name.value;
    const age = this.age.value;
    const facebook = this.facebook_link.value;
    const twitter = this.twitter_link.value;
    const linkedin = this.linkedin_link.value;
            
    this.props.onClose();
    return this.props.addMember(name, age, facebook, twitter, linkedin);
}

  render(){
    let dialog = (
      <div class="js-overlay overlay" id="overlay" >
        <div className="popup js-popup"  id="js-popup">
          <button className="popup__close js-close" onClick={this.props.onClose}>
            <i className="far fa-times-circle"></i>
          </button>
        <div className="popup__content">
          <p>
            Fill in the following fields to add new member:
          </p>
    
          <form onSubmit={this.addMember}>
            <input ref={input => this.name = input} type="text" className="name" placeholder="Name" id="user_name" name="user_name" value={this.props.userName}></input> 
            <br></br>              
            <input ref={input => this.age = input} type="number" className="age" placeholder="Age" id="age" name="user_age"></input>  
            <br></br>    
            <input ref={input => this.facebook_link = input} type="text" className="facebook_link" placeholder="Facebook Link" id="facebook_link" name="facebook_link"></input>  
            <br></br> 
            <input ref={input => this.twitter_link = input} type="text" className="twitter_link" placeholder="Twitter Link" id="twitter_link" name="twitter_link"></input>  
            <br></br> 
            <input ref={input => this.linkedin_link = input} type="text" className="linkedin_link" placeholder="Linkedink Link" id="linkedin_link" name="linkedin_link"></input>  
            <br></br> 
            <button type='submit' className="submit">Add new member</button>
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
    newMember: state.newMemberReducer.newMember,
  }
};
  
function mapDispatchToProps(dispatch){
  return {
    addMember: (name, age, facebook_link, twitter_link, linkedin_link) => {
      dispatch(addNewMember(name, age, facebook_link, twitter_link, linkedin_link))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMemberPopup);

