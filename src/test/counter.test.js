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

  test("increase count", () => {
    const component = render(<Counter></Counter>);
    const buttonIncrease = component.container.querySelector("button");
    fireEvent.click(buttonIncrease);
    console.log(prettyDOM(buttonIncrease));
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
});
