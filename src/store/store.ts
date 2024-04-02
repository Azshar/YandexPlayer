import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../store/reducers/UserSlice';

const rootReducer = combineReducers({
  userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = typeof store.dispatch;
