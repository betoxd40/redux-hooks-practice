import { combineReducers } from 'redux';
import TodoReducer from './todo';

const rootReducer = combineReducers({
    todosReducer: TodoReducer,
});

export default rootReducer;