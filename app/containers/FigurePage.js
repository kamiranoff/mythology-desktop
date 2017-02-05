import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Figure from '../components/Figure/Figure';
import { getFigure } from '../actions/figures';

class FigurePage extends Component {
  componentWillMount() {
    getFigure(this.props.figureId);
  }

  render() {
    return (
      <Figure figure={this.props.figure} />
    );
  }
}


function mapStateToProps({ figures }) {

  return {
    figure: figures.figure
  };
}

export default connect(mapStateToProps, { getFigure })(FigurePage);
