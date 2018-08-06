import React, { Component } from 'react';

import Card from '@material-ui/core/Card';

import './styles.css';


class ListItem extends Component {


    render(){
        const {value, changeCurrentRecord} = this.props;
        const currentRecord = value.name;

        return(
            <Card className={'listItem'} onClick={()=>{
                changeCurrentRecord(currentRecord)
            }}>
                <button>►</button>
                <h4>{currentRecord}</h4>
            </Card>
        );
    }
}

export default ListItem;