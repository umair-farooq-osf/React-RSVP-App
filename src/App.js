import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';
import Counter from './Counter';
import Header from './Header';
import ConfirmedFilter from './ConfirmedFilter';

class App extends Component {

    state = {
        isFiltered: false,
        pendingGuest: '',
        guests: [
            {
                name: 'Tresure',
                isConfirmed: false,
                isEditing: false
            },
            {
                name: 'Nic',
                isConfirmed: true,
                isEditing: false
            },
            {
                name: 'Matt K',
                isConfirmed: false,
                isEditing: false
            }
        ]
    }

    toggleGuestPropertyAt = (property, indexToChange) =>
        this.setState({
            guests: this.state.guests.map((guest, index) => {
                if (index === indexToChange) {
                    return {
                        ...guest,
                        [property]: !guest[property]
                    };
                }

                return guest;
            })
        });

    setNameAt = (name, indexToChange) =>
        this.setState({
            guests: this.state.guests.map((guest, index) => {
                if (index === indexToChange) {
                    return {
                        ...guest,
                        name
                    };
                }

                return guest;
            })
        });

    toggleConfirmationAt = (index) =>
        this.toggleGuestPropertyAt('isConfirmed', index);

    toggleEditingAt = (index) =>
        this.toggleGuestPropertyAt('isEditing', index);

    removeGuestAt = (index) =>
        this.setState({
            guests: [
                ...this.state.guests.slice(0, index),
                ...this.state.guests.slice(index + 1)
            ]
        });

    toggleFilter = () =>
        this.setState({
            isFiltered: !this.state.isFiltered
        });

    handleNameInput = (event) =>
        this.setState({
            pendingGuest: event.target.value
        });

    newGuestSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({
            guests: [
                {
                    name: this.state.pendingGuest,
                    isConfirmed: false,
                    isEditing: false
                },
                ...this.state.guests
            ],
            pendingGuest: ''
        });
    }

    getTotalInvited = () => this.state.guests.length;

    getAttendingGuests = () =>
        this.state.guests.reduce(
            (total, guest) => guest.isConfirmed ? total + 1 : total,
            0
        );

    render() {
        const totalInvited = this.getTotalInvited();
        const numberAttending = this.getAttendingGuests();
        const numberUnconfirmed = totalInvited - numberAttending;

        return (
            <div className="App">
                <Header
                    submitGuest={ this.newGuestSubmitHandler }
                    nameInput={ this.handleNameInput }
                    pendingGuest={ this.state.pendingGuest }
                />

                <div className="main">
                    <ConfirmedFilter
                        toggleFilter={ this.toggleFilter }
                        isFiltered={ this.state.isFiltered }
                    />

                    <Counter
                        numberAttending={ numberAttending }
                        numberUnconfirmed={ numberUnconfirmed }
                        totalInvited={ totalInvited }
                    />

                    <GuestList
                        guests={ this.state.guests }
                        toggleConfirmationAt={ this.toggleConfirmationAt }
                        toggleEditingAt={ this.toggleEditingAt }
                        removeGuestAt={ this.removeGuestAt }
                        setNameAt={ this.setNameAt }
                        isFiltered={ this.state.isFiltered }
                        pendingGuest={ this.state.pendingGuest }
                    />
                </div>
            </div>
        );
    }
}

export default App;
