import React, { Component } from 'react';

import {
    View, 
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    FlatList
} from 'react-native';

import SocketIOClient from 'socket.io-client/dist/socket.io.js'

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { parseIconFromClassName } from 'react-native-fontawesome';

const validIcon = parseIconFromClassName('fas fa-comments');



class Messagerie extends Component {

constructor(props) {
    super(props);
    this.state = {
        message: "",
        messages: []
    }

    this.socket = SocketIOClient('http://10.11.97.112:3000');
    this.socket.on('connect', () => console.log('ConnectionOk'));
    this.socket.on('messageServeur', this._getReply);
    this.setState({messages: [this.state.messages, this._getReply]})
}

_sendMessage = () => {
    //emit a dong message to socket server
    console.log('messageClient')
    this.socket.emit('messageClient', this.state.message);
    console.log(this.state.message);
    this.setState({message: ""});
}

_getReply = (data) => {
    //get reply from socket server, log it to console
    console.log(data)

}

static navigationOptions = {
    tabBarLabel: '',
    tabBarIcon: () => (<FontAwesome style={{ fontSize: 30 }} icon={validIcon}></FontAwesome>)
}


    render() {

        const messages = this.state.messages.map(message => (
            <Text key={message}>{message}</Text>
          ));

        return (
            <View style={{padding: 10, flex: 1, justifyContent: 'center'}}>

                
            <TextInput
              style={{height: 100, flex: 1, alignSelf: 'flex-end'}}
              placeholder="Votre message"
              onChangeText={(message) => this.setState({message})}
              value={this.state.message}
            />
            <Button onPress={this._sendMessage} title="test" 
            style={{flex: 1, alignContent: 'flex-end', alignSelf: 'flex-end'}}/>

         {messages}
          </View>
        );
        
    }
}

export default Messagerie;