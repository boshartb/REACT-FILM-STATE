import React, { Component } from 'react';

//const ListItem = state =>
class Fave extends Component {

    // 4.1 state with no data
    state = {
        // 4.3 Set intital state
        isFave: false
    }

    //4.2  Fat arrow to bind context of this
    handleClick = (e) => {
        console.log("handling Fave click!")
        e.stopPropagation()

        //4.4 set state in event handler
        this.setState((state, props) => {
            return { isFave: !state.isFave }

        })


    }

    newClass = (e) => {
        if (this.state.isFave == false) {
            return 'film-row-fave remove_from_queue';
        } else {
            return 'film-row-fave add_to_queue'
        }
    }




    render() {
        console.log(this.newClass())
        return (
            <div onClick={this.handleClick} className={this.newClass()}>
                <p className="material-icons">add_to_queue</p>
            </div>
        );
    }
}

export default Fave;