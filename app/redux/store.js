import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhance = applyMiddleware(thunk);
const create = enhance(createStore);

export default (create((rootReducer)));
