import {getRequest} from '../../server/http-requests';
import {CHARACTERS_URL} from '../../server/urls';
import actionTypes from '../types/action-types';

export const getCharactersList = params => {
  return async dispatch => {
    dispatch({type: actionTypes.charactersActions.PENDING_CHARACTERS});
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      dispatch({
        type: actionTypes.charactersActions.FETCH_CHARACTERS,
        payload: response.data.results,
      });
    
    } catch (err) {
      dispatch({
        type: actionTypes.charactersActions.ERROR_CHARACTERS,
        error: err,
      });
    }
  };
};

export const getCharactersDetails = characterID => {
  const detailsURL = `${CHARACTERS_URL}/${characterID}`;

  return async dispatch => {
    dispatch({
      type: actionTypes.characterDetailActions.PENDING_CHARACTER_DETAILS,
    });
    try {
      const response = await getRequest(detailsURL);
      // console.log(response.data);
      dispatch({
        type: actionTypes.characterDetailActions.FETCH_CHARACTER_DETAILS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.characterDetailActions.ERROR_CHARACTER_DETAILS,
        error: err,
      });
    }
  };
};

export const resetData = () => {
  // console.log("The function is working");
  return async dispatch => {
    dispatch({
      type: actionTypes.characterDetailActions.RESET_DATA,
    });
  };
};

export const updateParams = params => {
  // console.log("The function is working");
  return async dispatch => {
    dispatch({
      type: actionTypes.charactersActions.UPDATE_PARAMS,
      parameters: params,
    });
  };
};

export const loadMoreCharacters = params => {
  return async dispatch => {
    try {
      const nextPage = params.page + 1;
      const response = await getRequest(CHARACTERS_URL, {
        ...params,
        page: nextPage,
        prev: null,
      });
      // console.log(response.data);
      dispatch({
        type: actionTypes.charactersActions.LOAD_MORE_DATA,
        payload: response.data.results,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.charactersActions.ERROR_CHARACTERS,
        error: err,
      });
    }
  };
};
