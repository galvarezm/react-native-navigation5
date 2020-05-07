import React from 'react';
import Page from './page'

class TabGallery extends React.Component {

    constructor(props){
        super();
    }

    render(){
        //this.props.route.params.navigationParent.setOptions({ title: 'gallery' });
        return(
            <Page 
                navigation={this.props.navigation} 
            />
        )
    }

}

export default TabGallery;