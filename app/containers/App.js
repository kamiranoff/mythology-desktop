// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllGreeks } from '../actions/figures';

class App extends Component {
  props: {
    children: HTMLElement
  };

  componentWillMount() {
    this.props.fetchAllGreeks();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(null, { fetchAllGreeks })(App);
