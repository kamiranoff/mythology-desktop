import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Figure from '../components/Figure/Figure';
import { getFigure, triggerEditMode } from '../actions/figures';

class FigurePage extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.getFigure(this.props.params.id);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  handleUpdateClick(editMode) {
    this.props.triggerEditMode(editMode);
  }

  render() {
    return (
      <Figure
        figure={this.props.figure}
        handleUpdateClick={this.handleUpdateClick}
        editMode={this.props.editMode}
      />
    );
  }
}

function mapStateToProps({ figures: { figure, editMode } }) {

  return {
    figure,
    editMode
  };
}

export default connect(mapStateToProps, { getFigure, triggerEditMode })(FigurePage);
