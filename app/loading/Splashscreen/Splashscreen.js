import React, { Component } from 'react';

import {
View,
ActivityIndicator, 
Image,
Animated,
Easing
} from 'react-native';


import styles from './style';

class Splashscreen extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Main');
        }, 3000)
    }
    


    render() {
        
     return (
        <View style={styles.container}>
        <Image style={styles.image}
        source={require('../../assets/img/icon.png')}
        />
     </View>
 
     );
    }
}

export default Splashscreen;