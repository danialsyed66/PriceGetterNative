import { Alert } from 'react-native';

const alert = (title, subtitle, options) =>
  Alert.alert(title, subtitle, [{ text: 'Ok' }], { cancelable: true });

export default alert;
