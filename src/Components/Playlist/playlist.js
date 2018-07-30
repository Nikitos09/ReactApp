import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';

import Player from '../Player';
import ListItem from '../ListItem';

import './styles.css';



class Playlist extends Component {
    render(){
        const {value} = this.props.location.state;

        return(
            <div className={'playlistWrapper'}>
                <Card className={'playlistTitle'}>
                    <img src={require('../../Data/preview/' + value.preview)} className={'playlistImage'} alt={'PlaylistImage'}/>
                    <div>
                        <h1>{value.title}</h1>
                        <Player value = {value}/>
                    </div>
                </Card>
                <List className={'playlistList'}>
                    {
                        value.list.map((music)=>
                            <ListItem value={music} key={music.id}/>
                        )
                    }
                </List>

            </div>
        );
    }

}

export default Playlist;