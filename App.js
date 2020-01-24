import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

import Notification from './services/Notification';

export default function Codepush() {

  function handleClick(){
    Notification
    .configure()
    .localNotification({
      message: "Notificação Teste01"
    });
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Native</Text>
      <Button title="Notificação" onPress={handleClick} />
    </View>
  );
}
