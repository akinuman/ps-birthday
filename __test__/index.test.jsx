import React from "react";
import Home from "../pages/index";
import { render, screen } from "@testing-library/react";

describe("Home page", () => {
  it("test heading", () => {
    render(<Home />);
    screen.getAllByRole("heading", { name: /Vladimir Vasov -/ });
  });
});
