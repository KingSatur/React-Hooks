import React from "react";
import ReactDOM from "react-dom";
import { MultipleCustomHooks } from "./components/examples/MultipleCustomHooks";
import { FormUseCustomHook } from "./components/useEffect/FormCustomHook";
import { SimpleForm } from "./components/useEffect/SimpleForm";
import { FocusScreen } from "./components/useRef/FocusScreen";
import CounterApp from "./components/useState/counterApp";
import { CounterCustomHook } from "./components/useState/CounterCustomHook";
import { HooksApp } from "./hooksApp";

ReactDOM.render(<FocusScreen />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
