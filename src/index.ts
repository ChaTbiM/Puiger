import { render } from "lit";
import App from "./App";

const rootAppSelector: HTMLElement = document.querySelector("body");

render(App(), rootAppSelector);