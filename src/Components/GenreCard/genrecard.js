import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





class GenreCard extends Component {

    render() {

        const {classes, value} = this.props;
        const link = '../Data/preview';
        const format = '.jpg';

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={link + value.preview + format}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {value.music}
                    </Typography>
                    <Typography component="p">
                        {value.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Listen
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default GenreCard;