import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

  const onMessage = (event: any) => {
    let data = JSON.parse(event.nativeEvent.data);
    if (data.type === 'GO_BACK') {
      Alert.alert('Go Back', 'Are you sure you want to go back?', [
        {
          text: 'Yes',
          onPress: () => console.log('Yes pressed'),
        },
        {
          text: 'No',
          onPress: () => console.log('No pressed'),
          style: 'cancel',
        },
      ]);
    }
  }


  
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "http://localhost:5173" }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        geolocationEnabled={true}
        onMessage={onMessage}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
