import React from 'react';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';
import PushNotification from 'react-native-push-notification';
import Notification from './services/Notification';

export default function Codepush() {
  function handleClick() {
    // Notification
    // .configure()
    // .localNotification({
    //   message: "Notificação Teste01"
    // });
    Notification.configure().localNotificationSchedule({
      message: 'Notificação Em background',
      date: new Date(Date.now() + 5 * 1000), // in 60 secs
    });

    //   PushNotification.localNotificationSchedule({
    //     //... You can use all the options from localNotifications
    //     message: 'My Notification Message 02', // (required)
    //     date: new Date(Date.now() + 5 * 1000), // in 60 secs
    //   });

    //   alert('Agendado');
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Native</Text>
      <Button title="Notificação" onPress={handleClick} />
    </View>
  );
}
