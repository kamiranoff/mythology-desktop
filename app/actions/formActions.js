import callApi from '../utils/apiCaller';

import {
  REQUEST_FIGURE_UPDATE,
  RECEIVE_FIGURE_UPDATE,
} from '../constants/actions';

import { FIGURES } from '../constants/environment';

const requestFigureUpdate = () => {
  return {
    type: REQUEST_FIGURE_UPDATE,
  };
};

const receiveFigureUpdate = figure => {
  return {
    type: RECEIVE_FIGURE_UPDATE,
    figure,
  };
};

export function updateFigure(figure) {
  const figureId = figure.figureId;
  return dispatch => {
    dispatch(requestFigureUpdate());
    return callApi(`${FIGURES}/${figureId}`, 'PUT', figure).then(updatedFigure => {
      dispatch(receiveFigureUpdate(updatedFigure));
    });
  };
}
