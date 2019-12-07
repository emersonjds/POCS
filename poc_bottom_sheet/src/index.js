import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Example from './components/Exemple';
import ExampleBottom from './components/BottomReanimated';

// import { Container } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Teste</Text> */}
      {/* <Example /> */}
      <ExampleBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
