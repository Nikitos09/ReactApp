import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';

import Player from '../Player';
import ListItem from '../ListItem';

import './styles.css';



class Playlist extends Component {
    render(){
        console.log(123);
        console.log(this.props.history);
        const {value} = this.props.history.state;
        console.log(this.props.history);

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
                            <ListItem value={music} />
                        )
                    }
                </List>

            </div>
        );
    }

}

export default Playlist;