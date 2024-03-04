import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from './App.tsx'
import "./App.css";
import busReducer from "./reducers/busReducer";
import tramReducer from "./reducers/tramReducer";

const store = configureStore({
    reducer: {
        bus: busReducer,
        tram: tramReducer
    }
});

export type IRootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
