/* eslint-disable no-undef */

import React from "react";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "../components/counter";

describe("Prueba inicial tdd", () => {
  test("renders content", () => {
    const texto = "Contador";
    const component = render(<Counter></Counter>);
    //component.getByText(texto);
    //console.log("render test:", component);
    expect(component.container).toHaveTextContent(texto);
  });

  test("renders content title", () => {
    const texto = "Contador";
    const component = render(<Counter></Counter>);
    //component.getByText(texto);
    //console.log("render test:", component);
    //expect(component.container).toHaveTextContent(texto);
    const h2 = component.container.querySelector("h2");
    expect(h2).toHaveTextContent(texto);
  });

  test("get increase button", () => {
    const component = render(<Counter></Counter>);
    const buttonIncrease = component.container.querySelector("button");
    fireEvent.click(buttonIncrease);
    console.log(prettyDOM(buttonIncrease));
  });

  test("get decrease button", () => {
    const component = render(<Counter></Counter>);
    const buttonDecrease = component.getByTestId("decrease-element");
    fireEvent.click(buttonDecrease);
    console.log(prettyDOM(buttonDecrease));
  });

  test("display counter text", () => {
    const component = render(<Counter></Counter>);
    const banner = component.container.querySelector("h4");
    console.log("contador banner: ", prettyDOM(banner));
    expect(banner).toHaveTextContent("0");
  });

  test("increment counter", () => {
    const component = render(<Counter></Counter>);
    const buttonIncrease = component.container.querySelector("button");
    fireEvent.click(buttonIncrease);
    const banner = component.container.querySelector("h4");
    console.log("contador banner: ", prettyDOM(banner));
    expect(banner).toHaveTextContent("1");
  });

  test("decrease counter", () => {
    const component = render(<Counter></Counter>);
    const buttonDecrease = component.getByTestId("decrease-element");
    fireEvent.click(buttonDecrease);
    console.log("boton decrementar", prettyDOM(buttonDecrease));
    const banner = component.container.querySelector("h4");
    console.log("contador banner: ", prettyDOM(banner));
    expect(banner).toHaveTextContent("-1");
  });

  test("reseat counter", () => {
    const component = render(<Counter></Counter>);
    const buttonDecrease = component.getByTestId("decrease-element");
    const buttonReset = component.getByTestId("reset-element");
    const banner = component.container.querySelector("h4");
    fireEvent.click(buttonDecrease);
    fireEvent.click(buttonDecrease);
    expect(banner).toHaveTextContent("-2");
    fireEvent.click(buttonReset);
    expect(banner).toHaveTextContent("0");
  });
});
