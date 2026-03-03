import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'boxicons/css/boxicons.min.css';
import App from './App.jsx'
import { Provider } from 'react-redux';
import { persistor, store } from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import AppInitializer from './app/Appinitializer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <AppInitializer>
          <App />
        </AppInitializer>
      </PersistGate>
    </Provider>
  </StrictMode >,
);