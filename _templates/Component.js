import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Component = () => (
  <View>
    <Text>Component</Text>
  </View>
);

Component.propTypes = {};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, null)(Component);
