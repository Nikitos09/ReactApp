import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Player from '../Player';

import './styles.css';



class Playlist extends Component {
    render(){

        const {value, classes, theme} = this.props;
        const {music} = this.props.value.list;
        return(
            <div className={'playlistWrapper'}>
                <Card className={'playlistTitle'}>
                    <img src={require('../../Data/preview/' + value.preview)} className={'playlistImage'}/>
                    <div>
                        <h1>{value.title}</h1>
                        <Player value = {value}/>
                    </div>
                </Card>
                <List className={'playlistList'}>
                    {
                        this.props.value.list.map((music)=>
                            <ListItem value={music}>
                                {'I am ' + music}
                            </ListItem>
                        )
                    }
                </List>

            </div>
        );
    }

}

export default Playlist;