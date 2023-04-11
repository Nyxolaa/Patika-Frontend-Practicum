import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders title without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
 