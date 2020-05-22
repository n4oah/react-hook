import React, { ElementType } from "react";
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, Store } from 'redux';
import reducer, { RootState } from '../store';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

type AppProps = {
  Component: ElementType,
  store: Store
};

const App: React.FC<AppProps> = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Component/>
    </Provider>
  );
};