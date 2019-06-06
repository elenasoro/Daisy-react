import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import saveUserData from '../../store/actions/saveUserData';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser(event) {
    const { onClose, addNewUser } = this.props;
    event.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;

    onClose();
    return addNewUser(name, email, phone);
  }

  render() {
    const { onClose, isPopupDisplayed } = this.props;
    let dialog = (
      <div className="js-overlay overlay" id="overlay">
        <div className="popup js-popup" id="js-popup">
          <button className="popup__close js-close" onClick={onClose} type="button">
            <i className="far fa-times-circle" />
          </button>
          <div className="popup__content">
            <p>Fill in the form and we will call you back</p>
            <form onSubmit={this.saveUser}>
              <input ref={input => (this.name = input)} type="text" className="name" placeholder="Name" id="user_name" name="user_name" />
              <br />
              <input ref={input => (this.email = input)} type="email" className="email" placeholder="E-mail" id="email" name="user_email" />
              <br />
              <input ref={input => (this.phone = input)} type="number" className="phone" placeholder="Phone Number" id="phone" name="user_phone" />
              <br />
              <button type="submit" className="submit">Submit</button>
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
    newUser: state.newUserReducer.newUser,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (name, email, phone) => {
      dispatch(saveUserData(name, email, phone));
    },
  };
}

// Popup.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   addNewUser: PropTypes.func.isRequired,
//   isPopupDisplayed: PropTypes.bool.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
