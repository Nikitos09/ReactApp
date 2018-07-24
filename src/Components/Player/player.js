import React, { Component } from 'react';

import player from 'play-sound';

import './styles.css';


class Player extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes, value} = this.props;

        return (
            <div>  i am player-component</div>
        );
    }
}


export default Player;