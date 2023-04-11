import React from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App.js";

it("renders title", () => {
  render (<App/>);
  const titleElement = screen.getByText(/Emoji Search/i);
  expect(titleElement).toBeInTheDocument();
});
 