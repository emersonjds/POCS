import React, { Component } from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class ExampleBottom extends Component {
  renderContent = () => (
    <View>
      <Text>Teste</Text>
    </View>
  );

  renderHeader = () => (
    <View
      style={{
        height: 30,
        width: Dimensions.get('window').width,
        backgroundColor: '#cecece',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}>
      <View
        style={{
          height: 10,
          width: 50,
          backgroundColor: '#000',
          borderRadius: 10,
        }}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          snapPoints={[50, 300, 450]}
          renderContent={this.renderContent}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }
}

export default ExampleBottom;
