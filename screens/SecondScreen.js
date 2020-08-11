import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class SecondScreen extends Component {
  componentDidMount() {
    global.props.showLoader();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, SecondScreen!</Text>
        <Button
          title="Go to Third"
          onPress={() => this.props.navigation.navigate('Third')}
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

export default SecondScreen;
