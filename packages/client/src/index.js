import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//redux:
// - createStore: функция для создания store (state+reducer)
// - store: хранилище js-объектов + логика их изменения
// - reducer: pure func: (state, action) => state
// - dispatch: функция, которая отправляет action в store (reducer)
// - action -> js object {type: 'string', ...bag}

//react-redux:
// - connect: HOC, пробрасывает нужную часть состояния в пропсы компонента
// - mapStateToProps: функция: что конкретно взять из state
// - Provider: дает теоретический доступ дерева App к состоянию
