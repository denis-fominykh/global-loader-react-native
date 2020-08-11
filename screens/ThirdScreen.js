import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ThirdScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, ThirdScreen!</Text>
        <Button
          title="Go to First"
          onPress={() => this.props.navigation.popToTop()}
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

export default ThirdScreen;
