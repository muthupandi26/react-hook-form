import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MuiFormLogin } from "./components/MuiFormLogin.tsx";
import AddTodo from "./components/AddTodo.tsx";
import { store } from "./app/store.ts";
import Todos from "./components/Todos.tsx";
import Carousel from "./components/Carousel/Carousel.tsx";
import ParentComponent from "./components/usecallback/ParentComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        {/* <App /> */}
        {/* <MuiFormLogin /> */}
        {/* <Todos />
        <AddTodo /> */}
        {/* <Carousel /> */} {/* custom carousel */}
        <ParentComponent />
      </>
    </Provider>
  </React.StrictMode>
);
