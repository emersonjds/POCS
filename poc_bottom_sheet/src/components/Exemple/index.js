import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

class Example extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => {
            this.RBSheet.open();
          }}
        />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              backgroundColor: '#cecece',
            },
          }}>
          <YourOwnComponent />
        </RBSheet>
      </View>
    );
  }
}

const YourOwnComponent = () => <Text>Your Pretty Component Goes Here</Text>;

export default Example;
