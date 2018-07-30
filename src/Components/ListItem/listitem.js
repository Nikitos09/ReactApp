import React, { Component } from 'react';

import Card from '@material-ui/core/Card';

import './styles.css';


class ListItem extends Component {

    render(){
        const {value} = this.props;
        let name = value.split('.');
            name = name[0];

        return(
            <Card className={'listItem'}>
                <button>►</button>
                <h4>{name}</h4>
            </Card>
        );
    }
}

export default ListItem;