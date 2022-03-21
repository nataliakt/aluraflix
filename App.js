import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Routes from './src/routes/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
