const actionTypes = {
  charactersActions: {
    FETCH_CHARACTERS: 'FETCH_CHARACTERS',
    PENDING_CHARACTERS: 'PENDING_CHARACTERS',
    ERROR_CHARACTERS: 'ERROR_CHARACTERS',
    UPDATE_PARAMS:'UPDATE_PARAMS',
    LOAD_MORE_DATA:'LOAD_MORE_DATA', // for loading new data for new page
  },
  characterDetailActions: {
    FETCH_CHARACTER_DETAILS: 'FETCH_CHARACTER_DETAILS',
    PENDING_CHARACTER_DETAILS: 'PENDING_CHARACTER_DETAILS',
    ERROR_CHARACTER_DETAILS: 'ERROR_CHARACTER_DETAILS',
    RESET_DATA:'RESET_DATA',
  },
  episodesActions: {},
  locationsActions: {},
};

export default actionTypes;
