
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import charactersReducer from './reducers/characters-reducer';

const rootReducer = combineReducers({
    charactersState: charactersReducer,
    
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// redux-thunk = middelware (action daki fonksiyonlarin async olarak calismasini saglar)

