import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";

test("renders homepage without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/welcome to fundbox/i)).toBeInTheDocument();
});
