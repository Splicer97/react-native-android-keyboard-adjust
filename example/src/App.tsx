import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  setAdjustResize,
  setAdjustNothing,
  getSoftInputMode,
} from '@splicer97/react-native-android-keyboard-adjust';

export default function App() {
  React.useEffect(() => {
    setAdjustResize();
    return () => {
      setAdjustNothing();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>{getSoftInputMode()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
