import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = (props) =>
    <form onSubmit={ props.submitGuest }>
        <input
            type="text"
            onChange={ props.nameInput }
            value={ props.pendingGuest }
            placeholder="Invite Someone"
        />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>;

GuestInputForm.propTypes = {
    submitGuest: PropTypes.func.isRequired,
    nameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default GuestInputForm;