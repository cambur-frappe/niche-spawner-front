import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { TWStyles } from "../../public/styles/tw";

@customElement("mer-loader")
export class MerLoader extends LitElement {
  static styles = [css`
      #loader-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        display: none;
      }
    `, TWStyles];

  render() {
    return html`
      <div id="loader-wrapper" class="justify-center items-center">
        <img width="64px" src="/assets/loader7.svg" alt="Loading..." />
      </div>
    `;
  }
}
