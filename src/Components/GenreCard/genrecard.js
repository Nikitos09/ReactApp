import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Playlist from '../Playlist';

import './styles.css';


class GenreCard extends Component {

    constructor(props) {
        super(props);
        this.openPlaylist = this.openPlaylist.bind(this);
    }

    openPlaylist(){
        ReactDOM.render(<Playlist value = {this.props.value}/>, document.getElementById('AppWrapper'));
    }

    render() {

        const {classes, value} = this.props;

        return (
                <Card className={classes.card}>
                    <a  className={'cardLink'} onClick={this.openPlaylist}>
                        <CardMedia>
                            <img src={require('../../Data/preview/' + value.preview)}  alt='CardImage' className={'CardImage'} />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {'Жанр: ' + value.title}
                            </Typography>
                            <Typography component="p">
                                {'Подборка'}
                            </Typography>
                        </CardContent>
                    </a>
                </Card>

        );
    }
}


export default GenreCard;