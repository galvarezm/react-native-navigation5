import React from 'react';
import Page from './page'

class TabLogbook extends React.Component {

    constructor(props){
        super();
    }

    render(){
        //this.props.route.params.navigationParent.setOptions({ title: 'home' });
        return(
            <Page 
                navigation={this.props.navigation} 
            />
        )
    }

}

export default TabLogbook;