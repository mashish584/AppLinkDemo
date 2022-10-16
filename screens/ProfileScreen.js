import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const js = `(function() {
    //  window.localStorage.setItem('Token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjU3NCwicm9sZSI6IjExIiwiZm5hbWUiOiJBbnNoaWthIiwibG5hbWUiOiJHYW5kaGkiLCJlbWFpbCI6ImFuc2hpa2EzMUBnbWFpbC5jb20iLCJvaWQiOjQyMSwic2Vzc2lvbklkIjoiN2RlYWZjYWM4NWZhNDlkZjQ5MDBmOGRhN2E1Zjg1YjliOWI4YjUyMDVmMDQ2ZDg3MGY5N2UwYTUwNGVmNTdkOCIsImlhdCI6MTY2NTU2ODYxNywiZXhwIjoxNjY4MTYwNjE3fQ.87j4hpiFlyS_Tn2A7GhuwUKMEk_ga6SQaF8YE0c01yQ');
    //  window.ReactNativeWebView.postMessage(JSON.stringify(event));
  })();`;

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://timer-app-omega.vercel.app/',
        }}
        onMessage={event => {
          alert(event.nativeEvent.data);
          /* event.nativeEvent.data must be string, i.e. window.postMessage
          should send only string.
          * */
        }}
        // injectedJavaScript={js}
      />
    </View>
  );
};

export default ProfileScreen;
