import React from "react";
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeUsersList } from '../../store/actions';

import Steve from '../../../assets/images/steve.png';
import Hellen from '../../../assets/images/hellen.png';
import Timothy from '../../../assets/images/timothy.png';

import Facebook from '../../../assets/images/fb.png';
import Twitter from '../../../assets/images/tw.png';
import Linkedin from '../../../assets/images/in.png';

import DownLight from '../../../assets/images/down_light.png';


import { ReduxFetch } from 'react-redux-fetch';
const axios = require('axios');




class Team extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.changeUsersList('https://randomuser.me/api/?results=5');
    }

    render(){
        let usersList;
        if(!this.props.users){
            usersList = <div>Loading...</div>  
        }
        else{
            usersList = (
                <React.Fragment>
                    {this.props.users.results.map((user, index)=>{
                        return (
                            <div class="team_member col-sm-12 col-md-2" key={index}>
                            <div className="team__data">
                            <img class="team__photo" src={user.picture.large} alt={user.name.last}></img>
                            <h5 class="team__name"><span>{user.name.first}</span> {user.name.last}</h5>
                            <p class="team__dob">Age: {user.dob.age}</p>
                            </div>

                            <div class="team__social">
                                <a href="https://www.facebook.com/" target="_blank"><img src={Facebook} alt="Facebook"></img></a> 
                                <a href="https://twitter.com/" target="_blank"><img src={Twitter} alt="Twitter"></img></a>
                                <a href="https://www.linkedin.com/feed/" target="_blank"><img src={Linkedin} alt="Linkedin"></img></a>
                            </div>
                            </div>
                        )
                    })}
                </React.Fragment>
            )     
        }
        return (
        <React.Fragment>
            <section class="team" id="team">            
                 <h2 class="block_heading">Our <span>team</span></h2>
                 <div class="team__members container">
                     <div class="row">
                     {usersList}
                     </div>
                 </div>
              <button class="down down-light" onclick="scrollDown('testimonials')"><img src={DownLight} alt="Down button"></img></button>  
            </section>
        </React.Fragment> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.usersReducer.users
      
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        changeUsersList: bindActionCreators(changeUsersList, dispatch),
        
    }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Team);


    