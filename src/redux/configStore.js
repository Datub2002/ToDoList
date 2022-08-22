import { applyMiddleware, combineReducers,createStore} from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer';
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import reduxThunk from 'redux-thunk';
import LoadingReducer from './reducers/LoadingReducer';


const middleWareSaga = createMiddleWareSaga();



const rootReducer = combineReducers({
    //reducer khai báo tại đây :)
    ToDoListReducer,
    LoadingReducer
});

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));
//saga run ?
middleWareSaga.run(rootSaga);

export default store;

