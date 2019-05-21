import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

    state = {
        isFiltered: false,
        pendingGuest: '',
        guests: []
    }

    lastGuestId = 0;

    getNewGuestId = () => {
        const id = this.lastGuestId;
        this.lastGuestId++;
        return id;
    }

    toggleGuestProperty = (property, id) =>
        this.setState({
            guests: this.state.guests.map(guest => {
                if (guest.id === id) {
                    return {
                        ...guest,
                        [property]: !guest[property]
                    };
                }

                return guest;
            })
        });

    setName = (name, id) =>
        this.setState({
            guests: this.state.guests.map(guest => {
                if (guest.id === id) {
                    return {
                        ...guest,
                        name
                    };
                }

                return guest;
            })
        });

    toggleConfirmation = (id) =>
        this.toggleGuestProperty('isConfirmed', id);

    toggleEditing = (id) =>
        this.toggleGuestProperty('isEditing', id);

    removeGuest = (id) =>
        this.setState({
            guests: this.state.guests.filter(guest => guest.id !== id)
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
        const guestId = this.getNewGuestId();
        this.setState({
            guests: [
                {
                    name: this.state.pendingGuest,
                    isConfirmed: false,
                    isEditing: false,
                    id: guestId
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

                <MainContent
                    toggleFilter={ this.toggleFilter }
                    isFiltered={ this.state.isFiltered }
                    numberAttending={ numberAttending }
                    numberUnconfirmed={ numberUnconfirmed }
                    totalInvited={ totalInvited }
                    guests={ this.state.guests }
                    toggleConfirmation={ this.toggleConfirmation }
                    toggleEditing={ this.toggleEditing }
                    removeGuest={ this.removeGuest }
                    setName={ this.setName }
                    pendingGuest={ this.state.pendingGuest }
                />
            </div>
        );
    }
}

export default App;
