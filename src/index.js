import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import Loading from "./Components/loading/Loading";

let persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={ruRu}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
