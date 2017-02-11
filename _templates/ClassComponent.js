import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { styles } from './styles';

class ClassComponent extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>ClassComponent</Text>
      </View>
    );
  }
}

ClassComponent.propTypes = {};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, null)(ClassComponent);

