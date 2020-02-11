import PushNotification from 'react-native-push-notification';

export default {
  configure() {
    PushNotification.localNotificationSchedule.configure({
      onNotification(notification) {},
    });

    return PushNotification;
  },
};
