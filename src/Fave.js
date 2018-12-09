import React, { Component } from 'react';

//const ListItem = state =>
class Fave extends Component {

    handleClick = (e) => {
        console.log("handling Fave click!")
    }

    render() {

        return (
            <div onClick={this.handleClick} className="film-row-fave add_to_queue">
                <p className="material-icons">add_to_queue</p>
            </div>
        );
    }
}

export default Fave;