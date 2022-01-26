import { LitElement, html, CSSResultGroup, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export class SecondaryBlock extends LitElement {
  static styles?: CSSResultGroup = css`
    :host {
      display: block;
      height: 21.3vh;
      background-color: #c3c8fc;
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
