import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App</Text>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{color: 'white', fontSize: 15}}>Login with Facebook</Text>
      </Icon.Button>
    </View>
  );
}
