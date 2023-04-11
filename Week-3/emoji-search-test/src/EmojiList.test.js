import React from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App.js";

it("renders emoji list", () => {
    render(<App/>);
    const emojies = screen.getAllByText(/Click to copy emoji/i);
    const emoji = screen.getByText("Relaxed");
    expect(emoji).toBeInTheDocument();
    expect(emojies.length).toEqual(20);
});
 