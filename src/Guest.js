import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = (props) =>
    <li>
        <GuestName
            isEditing={ props.isEditing }
            handleNameEdits={ event => props.setName(event.target.value) }>
            { props.name }
        </GuestName>
        <label>
            <input
                type="checkbox"
                checked={ props.isConfirmed }
                onChange={ props.handleConfirmation } /> Confirmed
        </label>
        <button onClick={ props.handleToggleEditing }>
            { props.isEditing ? 'save' : 'edit' }
        </button>
        <button onClick={ props.handleRemoveGuest }>remove</button>
    </li>;

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired,
    handleRemoveGuest: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
};

export default Guest;