import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store, persistor } from "./Redux/store";
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import QueryProvider from './context/queryProvider';
import theme from './utilities/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryProvider>
    </BrowserRouter>
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
