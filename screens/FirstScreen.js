import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, FirstScreen!</Text>
        <Button
          title="Go to Second"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default FirstScreen;
