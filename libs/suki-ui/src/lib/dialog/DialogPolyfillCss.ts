import { createGlobalStyle, css } from "styled-components";

const dialogPolyfillCss = css`
  dialog.with-polyfill {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
  }

  dialog.with-polyfill:not([open]) {
    display: none;
  }

  dialog.with-polyfill + .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.05);
  }

  ._dialog_overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  dialog.fixed,
  dialog.with-polyfill {
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const DialogPolyfillCss = createGlobalStyle`${dialogPolyfillCss}`;

export { DialogPolyfillCss };

export default dialogPolyfillCss;
