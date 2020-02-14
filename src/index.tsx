import * as React from "react";
import { render } from "react-dom";
import AppLayout from "./components/AppLayout/AppLayout";

const rootEl = document.getElementById("root");

render(
    <AppLayout />,
    rootEl,
);
