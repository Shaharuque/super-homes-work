import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { baseClient, csrfClient } from "./Misc/client";
import { store } from "./Redux/store";

/*
adds interceptor in CSRF AXIOS client defined ./Misc/client.js to handle CSRF
*/
csrfClient.interceptors.request.use(async (request) => {
  await baseClient.get("/sanctum/csrf-cookie");
  return request;
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
