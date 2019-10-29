import React, { Component } from 'react';

import {
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native';




import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { parseIconFromClassName } from 'react-native-fontawesome';

const validIcon = parseIconFromClassName('fas fa-address-book');



class Contacts extends Component {

constructor(props) {
    super(props);
    this.state = {

    }
}



static navigationOptions = {
    tabBarLabel: '',
    tabBarIcon: () => (<FontAwesome style={{ fontSize: 30 }} icon={validIcon}></FontAwesome>)
}


    render() {
        return (
            <View>
            <Text> Hello</Text>
            <TouchableOpacity>
                <Text> ouvrir lien</Text>
            </TouchableOpacity>
            
        </View>
        );
    }
}

export default Contacts;