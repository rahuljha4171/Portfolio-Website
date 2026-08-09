import { act, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./Context/theme";
import Seo from "./components/Seo/Seo";

vi.mock("react-github-calendar", () => ({
  GitHubCalendar: () => <div data-testid="github-calendar" />,
}));

test("renders the homepage and follows system theme changes", () => {
  let systemThemeListener;
  window.matchMedia = vi.fn().mockImplementation(() => ({
    matches: true,
    addEventListener: (_event, listener) => {
      systemThemeListener = listener;
    },
    removeEventListener: vi.fn(),
  }));

  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  expect(screen.getByRole("heading", { name: /rahul jha/i })).toBeInTheDocument();
  expect(screen.getByText("About")).toHaveAttribute("href", "/about");
  expect(screen.getByText("Contact")).toHaveAttribute(
    "href",
    "mailto:hello@rahuljha.info"
  );
  expect(document.title).toBe(
    "Rahul Jha | Senior Software Engineer & Full-Stack Developer"
  );

  const app = screen.getByRole("heading", { name: /rahul jha/i }).closest(".app");
  expect(app).toHaveClass("dark");
  expect(screen.queryByTitle(/switch to .* theme/i)).not.toBeInTheDocument();

  act(() => systemThemeListener({ matches: false }));
  expect(app).toHaveClass("light");
});

test("sets descriptive metadata for individual routes", () => {
  render(
    <MemoryRouter initialEntries={["/services"]}>
      <Seo />
    </MemoryRouter>
  );

  expect(document.title).toBe(
    "Engineering Expertise | React, Node.js & Mobile Development"
  );
});
