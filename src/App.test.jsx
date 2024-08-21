import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "@/App";

describe("App", () => {
  it("should render", () => {
    render(<App />);

    expect(screen.getByText(/Webpack Main Setup/i)).toBeInTheDocument();
  });

  it("should have a count value of 0 when loads", () => {
    render(<App />);

    expect(screen.getByText(/0/)).toHaveTextContent("0");
  });

  it("should increment count value", async () => {
    user.setup();
    render(<App />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByText(/1/)).toHaveTextContent("1");
  });
});
