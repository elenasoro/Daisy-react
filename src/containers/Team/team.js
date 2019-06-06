import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeUsersList } from '../../store/actions/usersActions';
import addNewMember from '../../store/actions/actionAddNewMember';
import Facebook from '../../../assets/images/fb.png';
import Twitter from '../../../assets/images/tw.png';
import Linkedin from '../../../assets/images/in.png';
import DownLight from '../../../assets/images/down_light.png';
import AddNewMemberPopup from '../AddNewMemberPopup/AddNewMemberPopup';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupDisplayed: false,
    };
    this.onClose = this.onClose.bind(this);
    this.openPopup = this.openPopup.bind(this);
    const { displayUsersList } = this.props;
    displayUsersList('https://randomuser.me/api/?results=4');
  }

  onClose() {
    this.setState({ isPopupDisplayed: false });
  }

  returnUsersList() {
    let usersList;
    const { users } = this.props;
    if (!users) {
      usersList = <div>Loading...</div>;
    } else {
      usersList = (
        <React.Fragment>
          {users.results.map((user) => {
            return (
              <div className="team_member col-sm-12 col-md-2" key={user.login.uuid}>
                <div className="team__data">
                  <img className="team__photo" src={user.picture.large} alt={user.name.last} />
                  <h5 className="team__name">
                    <span>{user.name.first}</span>
                    {user.name.last}
                  </h5>
                  <p className="team__dob">
                    Age:
                    {user.dob.age}
                  </p>
                </div>

                <div className="team__social">
                  <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><img src={Facebook} alt="Facebook" /></a>
                  <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><img src={Twitter} alt="Twitter" /></a>
                  <a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      );
    }
    return usersList;
  }

  returnNewMemeber() {
    let newMemberBlock;
    const { newMember } = this.props;

    if (newMember.name === '') {
      newMemberBlock = null;
    } else {
      newMemberBlock = (
        <React.Fragment>
          <div className="team_member col-sm-12 col-md-2">
            <div className="team__data">
              <div className="avatar_defaul" />
              <h5 className="team__name">
                <span>{newMember.name}</span>
              </h5>
              <p className="team__dob">
                Age:
                {newMember.age}
              </p>
            </div>

            <div className="team__social">
              <a href={newMember.facebook} rel="noopener noreferrer" target="_blank"><img src={Facebook} alt="Facebook" /></a>
              <a href={newMember.twitter} rel="noopener noreferrer" target="_blank"><img src={Twitter} alt="Twitter" /></a>
              <a href={newMember.linkedin} rel="noopener noreferrer" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return newMemberBlock;
  }

  openPopup() {
    this.setState({ isPopupDisplayed: true });
  }

  render() {
    const { isPopupDisplayed } = this.state;
    const { userName } = this.props;
    return (
      <React.Fragment>
        <section className="team" id="team">
          <h2 className="block_heading">
            Our
            <span>team</span>
          </h2>
          <button type="button" className="team__add" onClick={this.openPopup}>
            <i className="fas fa-plus" />
          </button>
          <div className="team__members container">
            <div className="row">
              {this.returnUsersList()}
              {this.returnNewMemeber()}
            </div>
          </div>
          <button className="down down-light" type="button">
            <img src={DownLight} alt="Down button" />
          </button>
          <AddNewMemberPopup
            isPopupDisplayed={isPopupDisplayed}
            onClose={this.onClose}
            userName={userName}
          />
        </section>
      </React.Fragment>
    );
  }
  // static propTypes = {
  //   displayUsersList: PropTypes.func.isRequired,
  //   userName: PropTypes.string.isRequired,
  //   users: PropTypes.objectOf(PropTypes.object()).isRequired,
  //   newMember: PropTypes.objectOf(PropTypes.object()).isRequired,
  // };
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    newMember: state.newMemberReducer.newMember,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayUsersList: bindActionCreators(changeUsersList, dispatch),
    addMember: bindActionCreators(addNewMember, dispatch),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Team);
