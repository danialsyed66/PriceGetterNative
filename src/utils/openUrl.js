import { Linking } from 'react-native';

import alert from './alert';

export default url => {
  Linking.canOpenURL(url).then(supported => {
    if (!supported || !url) return alert('Sorry', 'Can not open the url');

    Linking.openURL(url);
  });
};
