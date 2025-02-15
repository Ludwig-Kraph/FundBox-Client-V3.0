import { render, screen } from "@testing-library/react";
import WalletConnect from "../src/components/WalletConnect";

test("renders wallet connect button", () => {
  render(<WalletConnect />);
  const buttonElement = screen.getByText(/connect wallet/i);
  expect(buttonElement).toBeInTheDocument();
});
