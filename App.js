import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Components/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>

    <View style={styles.container}>
      <Navigator/>
    </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// react-native-public-ip

// react-native-paper

// country-data
// react-native-web
// react-native-unimodules
// react-native-screens
// react-native-reanimated
// react-native-gesture-handler
// react-dom
// expo-updates
