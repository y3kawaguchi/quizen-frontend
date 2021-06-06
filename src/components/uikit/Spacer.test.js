// FYI: https://the-teacher.medium.com/how-to-test-a-react-components-css-styles-with-react-testing-library-rtl-styled-components-43f744334528
import { render, screen } from "@testing-library/react";
import React from "react";
import Spacer from "./Spacer";

test("show the size value when axis is not set", () => {
  render(<Spacer size={32} />);
  const spacer = screen.getByRole("spacer");
  const style = window.getComputedStyle(spacer);
  expect(style.display).toBe("block");
  expect(style.width).toBe("32px");
  expect(style.height).toBe("32px");
});

test("show in 1px width when axis is vertical", () => {
  render(<Spacer axis="vertical" size={32} />);
  const spacer = screen.getByRole("spacer");
  const style = window.getComputedStyle(spacer);
  expect(style.display).toBe("block");
  expect(style.width).toBe("1px");
  expect(style.height).toBe("32px");
});

test("show in 1px height when axis is horizontal", () => {
  render(<Spacer axis="horizontal" size={32} />);
  const spacer = screen.getByRole("spacer");
  const style = window.getComputedStyle(spacer);
  expect(style.display).toBe("block");
  expect(style.width).toBe("32px");
  expect(style.height).toBe("1px");
});
