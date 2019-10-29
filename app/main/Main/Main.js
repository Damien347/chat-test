import React, { Component } from 'react';


import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Messagerie from '../Messagerie/Messagerie';
import Contacts from '../Contacts/Contacts';


const MainTabNavigator = createAppContainer(
    createBottomTabNavigator( {
        Messagerie: Messagerie,
        Contacts: Contacts
    }, {
        initialRouteName: 'Messagerie'
    })
);


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <MainTabNavigator />
        );
    }
}

export default Main;