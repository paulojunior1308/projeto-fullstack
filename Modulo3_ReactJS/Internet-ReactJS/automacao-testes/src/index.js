import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa o módulo correto para a nova API
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Cria a loja
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

// Cria a raiz do React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// Se você quiser que seu aplicativo funcione offline e carregue mais rápido, pode alterar
// unregister() para register() abaixo. Note que isso vem com algumas desvantagens.
// Saiba mais sobre os Service Workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
