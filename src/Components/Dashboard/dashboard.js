import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Data from '../../Data/dataInfo/dataInfo';

import GenreCard from '../GenreCard';




class Dashboard extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className='Wrapper'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="title" color="inherit">
                            Music
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.root} elevation={1}>
                    {
                        Data.map(function(musicData){
                            return (<GenreCard value={musicData}/>)
                    })
                    }
                </Paper>
            </div>
        );
    }
}

export default Dashboard;


