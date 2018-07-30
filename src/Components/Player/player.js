import React, { Component } from 'react';

import fs from 'file-system';

import './styles.css';


class Player extends Component {

    render() {
        const {classes, value} = this.props;
        const fileDir = '../../Data/audio/' + value.id;

        return (
            <div>
                <audio className={'playerWrapper'} controls>
                    <source type={'audio/mp3'} src={'../../Data/audio/genreDay/audio1.mp3'}/>
                </audio>
            </div>
        );
    }
}

export default Player;