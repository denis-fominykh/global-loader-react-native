import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  Button,
} from 'react-native';

class Loader extends Component {
  render() {
    const { visible } = this.props;

    return (
      <Modal animationType="slide" transparent={false} visible={visible}>
        <View style={{ ...styles.container, ...styles.horizontal }}>
          <ActivityIndicator size="large" color="#841584" />
          <Button
            title="Hide Loader"
            onPress={() => global.props.hideLoader()}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    padding: 10,
  },
});

export default Loader;
