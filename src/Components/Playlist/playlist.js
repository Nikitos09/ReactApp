import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';

import Player from '../Player';
import ListItem from '../ListItem';

import './styles.css';


class Playlist extends Component {
    state = {
        currentRecord: {
            name: 'Музыка для Вас...',
            direction: 'audio1.mp3',
        },
        buttonImage: '►',
    };

    changeCurrentRecord = (value, buttonImage) => {
        const player = document.getElementsByTagName('audio')[0];

        this.setState({currentRecord: value});
        player.load();
        player.currentTime = 0;
        player.play();
        player.played;

        if (buttonImage == '►'){
             this.setState({buttonImage: '❙❙'});
        } else {
            this.setState({buttonImage: '►'});
        }
        
    };


    render(){
        const {value} = this.props.location.state;

        return(
            <div className={'playlistWrapper'}>
                <Card className={'playlistTitle'}>
                    <img src={require('../../Data/preview/' + value.preview)} className={'playlistImage'} alt={'PlaylistImage'}/>
                    <div className={'playerWrapper'}>
                        <h1>{value.title}</h1>
                        <Player value = {value} currentRecord = {this.state.currentRecord}/>
                    </div>
                </Card>
                <List className={'playlistList'}>
                    {
                        value.list.map((music)=>
                            <ListItem value={music} key={music.id} changeCurrentRecord = {this.changeCurrentRecord} buttonImage = {this.state.buttonImage}/>
                        )
                    }
                </List>
            </div>
        );
    }
}

export default Playlist;