import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("should render basic skeleton", () => {
    render(<App />);

    expect(true).toBeTruthy();
  });
});
