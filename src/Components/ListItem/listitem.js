import React, { Component } from 'react';

import Card from '@material-ui/core/Card';

import './styles.css';


class ListItem extends Component {


    render(){
        const {changeCurrentRecord, buttonImage} = this.props;
        const currentRecord = this.props.value;

        console.log(this.props);
        return(
            <Card className={'listItem'} onClick={()=>{
                changeCurrentRecord(currentRecord, buttonImage)
            }}>
                <button>{buttonImage}</button>
                <h4>{currentRecord.name}</h4>
            </Card>
        );
    }
}

export default ListItem;