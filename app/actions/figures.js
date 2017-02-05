import callApi from '../utils/apiCaller';
import {
  REQUEST_ALL_GREEKS,
  RECEIVE_ALL_GREEKS,
  RECEIVE_ALL_GREEKS_FAILURE,
  REQUEST_FIGURE,
  RECEIVE_FIGURE,
  TRIGGER_EDIT_MODE,
} from '../constants/actions';
import getEnvironment from '../constants/environment';

const ENV = getEnvironment();

const requestAllGreeks = () => ({
  type: REQUEST_ALL_GREEKS,
});

const receiveAllGreeks = greeks => ({
  type: RECEIVE_ALL_GREEKS,
  greeks,
});

const receiveAllGreeksFailed = e => ({
  type: RECEIVE_ALL_GREEKS_FAILURE,
  error: e,
});

// eslint-disable-next-line import/prefer-default-export
export function fetchAllGreeks(filter) {
  let endPoint = ENV.API.GREEKS;
  if (filter) {
    const searchTerm = filter.trim().toUpperCase();
    endPoint = `${endPoint}?search=${searchTerm}`;
  }

  return (dispatch) => {
    dispatch(requestAllGreeks());
    return callApi(endPoint)
      .then((response) => {
        if (response.error) {
          dispatch(receiveAllGreeksFailed(response.error));
        } else {
          dispatch(receiveAllGreeks(response));
        }
      });
  };
}


const requestFigure = () => {
  return {
    type: REQUEST_FIGURE,
  };
};

const receiveFigure = figure => {
  return {
    type: RECEIVE_FIGURE,
    figure,
  };
};

export function getFigure(figureId) {
  return dispatch => {
    dispatch(requestFigure());
    return callApi(`${ENV.API.GREEKS}/${figureId}`).then(figure => {
      dispatch(receiveFigure(figure));
    });
  };
}


export const triggerEditMode = (editMode) => {
  return {
    type: TRIGGER_EDIT_MODE,
    editMode,
  };
};

