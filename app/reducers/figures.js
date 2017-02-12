import {
  REQUEST_ALL_GREEKS,
  RECEIVE_ALL_GREEKS,
  RECEIVE_ALL_GREEKS_FAILURE,
  TRIGGER_EDIT_MODE,
  REQUEST_FIGURE,
  RECEIVE_FIGURE,
  RECEIVE_FIGURE_UPDATE,
} from '../constants/actions';

const initialState = {
  figures: [],
  loading: true,
  error: '',
  figure: {},
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_ALL_GREEKS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_ALL_GREEKS:
      return {
        ...state,
        figures: action.greeks,
      };

    case RECEIVE_ALL_GREEKS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case REQUEST_FIGURE:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_FIGURE:
      return {
        ...state,
        figure: action.figure,
      };

    case RECEIVE_FIGURE_UPDATE:
      return {
        ...state,
        figure: action.figure,
      };


    case TRIGGER_EDIT_MODE:
      return {
        ...state,
        editMode: action.editMode,
      };


    default:
      return state;
  }


};
