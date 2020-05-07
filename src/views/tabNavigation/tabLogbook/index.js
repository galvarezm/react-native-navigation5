import React from 'react';
import Page from './page'

class TabSighting extends React.Component {

    constructor(props){
        super();
    }

    render(){
        //this.props.route.params.navigationParent.setOptions({ title: 'logbook' });
        return(
            <Page 
                navigation={this.props.navigation} 
            />
        )
    }

}

export default TabSighting;