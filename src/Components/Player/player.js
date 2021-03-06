import React, { Component } from 'react';

import fs from 'file-system';

import './styles.css';


class Player extends Component {

    render() {
        const {classes, value, currentRecord} = this.props;
        const fileDir = require('../../Data/audio/' + value.id + '/audio1.mp3');

        return (
            <div>
                <h4 className={'currentRecord'}>{currentRecord}</h4>
                <audio className={'playerWrapper'} controls>
                    <source type={'audio/mp3'} src={fileDir}/>
                    Обновите ваш браузер
                </audio>
            </div>
        );
    }
}

export default Player;