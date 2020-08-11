import React, { Component } from 'react';

import Loader from './Loader';

const { Provider, Consumer: AppConsumer } = React.createContext();

class AppProvider extends Component {
  state = {
    loading: false,
  };

  showLoader = () => this.setState({ loading: true });
  hideLoader = () => this.setState({ loading: false });

  render() {
    const { loading } = this.state;
    const { children } = this.props;

    const funcs = {
      showLoader: this.showLoader,
      hideLoader: this.hideLoader,
    };

    return (
      <Provider value={funcs}>
        {children}
        <Loader visible={loading} />
      </Provider>
    );
  }
}

export { AppProvider, AppConsumer };
