import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FiguresList from '../components/FiguresList/FiguresList';
import * as FiguresActions from '../actions/figures';

function mapStateToProps({figures}) {

  return {
    figures : figures.figures
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FiguresActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FiguresList);
