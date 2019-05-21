import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = (props) =>
    <div className="main">
        <ConfirmedFilter
            toggleFilter={ props.toggleFilter }
            isFiltered={ props.isFiltered }
        />

        <Counter
            numberAttending={ props.numberAttending }
            numberUnconfirmed={ props.numberUnconfirmed }
            totalInvited={ props.totalInvited }
        />

        <GuestList
            guests={ props.guests }
            toggleConfirmation={ props.toggleConfirmation }
            toggleEditing={ props.toggleEditing }
            removeGuest={ props.removeGuest }
            setName={ props.setName }
            isFiltered={ props.isFiltered }
            pendingGuest={ props.pendingGuest }
        />
    </div>;

MainContent.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    totalInvited: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default MainContent;
