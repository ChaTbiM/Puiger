import { LitElement, html, CSSResultGroup, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export class MainBlock extends LitElement {
  static styles?: CSSResultGroup = css`
    :host {
      display: block;
      height: 69.1vh;
      background-color: #4066e0;
      margin: 2rem auto;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .plus {
      color: black;
      font-size: 4.4rem;
      font-weight: bold;
    }
  `;

  // Render the UI as a function of component state
  render() {
    return html` <div id="plus" class="plus">&plus;</div> `;
  }
}
