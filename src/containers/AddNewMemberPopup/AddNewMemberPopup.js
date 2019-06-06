import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addNewMember from '../../store/actions/actionAddNewMember';

class AddNewMemberPopup extends React.Component {
  constructor(props) {
    super(props);
    this.addMember = this.addMember.bind(this);
  }

  addMember(event) {
    const { onClose, addMember } = this.props;
    event.preventDefault();

    const name = this.name.value;
    const age = this.age.value;
    const facebook = this.facebook_link.value;
    const twitter = this.twitter_link.value;
    const linkedin = this.linkedin_link.value;

    onClose();
    return addMember(name, age, facebook, twitter, linkedin);
  }

  render() {
    const { onClose, userName, isPopupDisplayed } = this.props;
    let dialog = (
      <div className="js-overlay overlay" id="overlay">
        <div className="popup js-popup" id="js-popup">
          <button className="popup__close js-close" onClick={onClose} type="button">
            <i className="far fa-times-circle" />
          </button>
          <div className="popup__content">
            <p>
              Fill in the following fields to add new member:
            </p>

            <form onSubmit={this.addMember}>
              <input ref={input => this.name = input} type="text" className="name" placeholder="Name" id="user_name" name="user_name" value={userName} />
              <br />
              <input ref={input => this.age = input} type="number" className="age" placeholder="Age" id="age" name="user_age" />
              <br />
              <input ref={input => this.facebook_link = input} type="text" className="facebook_link" placeholder="Facebook Link" id="facebook_link" name="facebook_link" />
              <br />
              <input ref={input => this.twitter_link = input} type="text" className="twitter_link" placeholder="Twitter Link" id="twitter_link" name="twitter_link" />
              <br />
              <input ref={input => this.linkedin_link = input} type="text" className="linkedin_link" placeholder="Linkedink Link" id="linkedin_link" name="linkedin_link" />
              <br />
              <button type="submit" className="submit">Add new member</button>
            </form>

          </div>
        </div>
      </div>
    );

    if (!isPopupDisplayed) {
      dialog = null;
    }

    return (
      <div>
        {dialog}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newMember: state.newMemberReducer.newMember
  };
  // return {}
};

function mapDispatchToProps(dispatch) {
  console.log(test)
  console.log(test)
  return {
    addMember: (name, age, facebookLink, twitterLink, linkedinLink) => {
      dispatch(addNewMember(name, age, facebookLink, twitterLink, linkedinLink));
    },
  };
}

// AddNewMemberPopup.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   addMember: PropTypes.func.isRequired,
//   userName: PropTypes.string.isRequired,
//   isPopupDisplayed: PropTypes.bool.isRequired,
// };

// export default connect(mapStateToProps, 
//   {addNewMember})(AddNewMemberPopup);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMemberPopup);

test