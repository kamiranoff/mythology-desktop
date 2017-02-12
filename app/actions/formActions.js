import callApi from '../utils/apiCaller';

import {
  REQUEST_FIGURE_UPDATE,
  RECEIVE_FIGURE_UPDATE,
  RECEIVE_FIGURE_UPDATE_FAILURE,
} from '../constants/actions';

import { FIGURES } from '../constants/environment';

import getEnvironment from '../constants/environment';

const ENV = getEnvironment();

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

const receiveFigureUpdateFailure = error => {
  return {
    type: RECEIVE_FIGURE_UPDATE_FAILURE,
    error,
  };
};

export function updateFigure(figure) {
  const figureId = figure._id;
  console.log('figureId', figure);
  return dispatch => {
    dispatch(requestFigureUpdate());
    return callApi(`${ENV.API.GREEKS}/${figureId}`, 'PATCH', undefined , figure).then(updatedFigure => {
      if (updatedFigure.error) {
        dispatch(receiveFigureUpdateFailure(updatedFigure.error));
      } else {
        dispatch(receiveFigureUpdate(updatedFigure));

      }
    });
  };
}
