import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //default local storage
import todosReducer from './todos/todos.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['todosReducer'] //keys all of reducers that redux needs to persist in local storage
}

const rootReducer = combineReducers({
  todosReducer,
});

export default persistReducer(persistConfig, rootReducer);