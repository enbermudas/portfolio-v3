import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

describe("App", () => {
  test("should render basic skeleton", () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(true).toBeTruthy();
  });
});
