import React from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.js";

it("searching-filtering", () => {
    render(<App/>);
    const searchInput = screen.getByText('100');
    expect(searchInput).toBeInTheDocument('100');
});