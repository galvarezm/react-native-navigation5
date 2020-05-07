import React from 'react';
import Page from './page'

class DropdownMenu extends React.Component {

    constructor(props){
        super();
    }

    render(){
        return(
            <Page 
                navigation={this.props.navigation} 
            />
        )
    }

}

export default DropdownMenu;