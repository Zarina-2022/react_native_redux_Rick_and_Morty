import actionTypes from '../types/action-types';

const initialState = {
  characterList: [],
  pending: false,
  error: null,
  characterDetails: {},
  pendingDetails: false,
  errorDetails: null,
  parameters: {
    page: 1,
    prev: null,
    status: null,
    gender: null,
    name: null, // textInput'ta baslangicta placeholder bos olmasi icin 
  },
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.charactersActions.FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
        prev:null
      };

    case actionTypes.charactersActions.UPDATE_PARAMS:
      return {
        ...state,
        parameters: {
          ...state.parameters,
          ...action.parameters,
        },
      };

    case actionTypes.charactersActions.LOAD_MORE_DATA:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload],
        parameters: {
          ...state.parameters,
          prev: null,
        },
      };

    case actionTypes.charactersActions.PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.charactersActions.ERROR_CHARACTERS:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case actionTypes.characterDetailActions.FETCH_CHARACTER_DETAILS:
      return {
        ...state,
        characterDetails: action.payload,
        pendingDetails: false,
      };
    case actionTypes.characterDetailActions.PENDING_CHARACTER_DETAILS:
      return {
        ...state,
        pendingDetails: true,
      };
    case actionTypes.characterDetailActions.ERROR_CHARACTER_DETAILS:
      return {
        ...state,
        pendingDetails: false,
        errorDetails: action.error,
      };

    case actionTypes.characterDetailActions.RESET_DATA:
      return {
        ...state,
        pendingDetails: false,
        errorDetails: null,
        characterDetails: {},
      };

    default:
      return state;
  }
};

export default charactersReducer;
