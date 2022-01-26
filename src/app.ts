import { CSSResultGroup, html, css, LitElement } from "lit";
import { MainBlock } from "./Components/MainBlock/MainBlock";
import { SecondaryBlock } from "./Components/SecondaryBlock/SecondaryBlock";

customElements.define("main-block", MainBlock);
customElements.define("secondary-block", SecondaryBlock);

export class RootWrapper extends LitElement {
  static styles?: CSSResultGroup = css`
    :host {
      display: block;
      max-width: 1366px;
      margin: 0 auto;
    }
  `;

  render() {
    return html`
      <main-block></main-block>
      <secondary-block></secondary-block>
    `;
  }
}

customElements.define("puiger-app", RootWrapper);
const App = () => html`<puiger-app></puiger-app>`;

export default App;
