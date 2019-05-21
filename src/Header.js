import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = (props) =>
    <header>
        <h1>{ props.title }</h1>
        <p>{ props.description }</p>
        <GuestInputForm
            submitGuest={ props.submitGuest }
            nameInput={ props.nameInput }
            pendingGuest={ props.pendingGuest }
        />
    </header>;

Header.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    submitGuest: PropTypes.func.isRequired,
    nameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.func.isRequired
};

Header.defaultProps = {
    title: 'RSVP',
    description: 'A Treehouse App'
};

export default Header;