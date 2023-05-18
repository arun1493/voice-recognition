const getAgent = () => cy.get("[data-cy=suki-agent]");
const getSukiLogo = () => cy.get("[data-cy=suki-logo]");

const getKebabItem = (i: number) => cy.get(`[data-cy=kebab-item-${i}]`);

const getIntroStep1Header = () => cy.get("[data-cy=intro-screen1-header]");
const getIntroStep1Arrow = () => cy.get("[data-cy=intro-screen1-arrow]");
const getIntroStep1Description = () => cy.get("[data-cy=intro-screen1-description]");

const getIntroStep2Header = () => cy.get("[data-cy=intro-screen2-header]");
const getIntroStep2Description = () => cy.get("[data-cy=intro-screen2-description]");
const getIntroStep2Skip = () => cy.get("[data-cy=intro-screen2-skip]");
const getIntroStep2Play = () => cy.get("[data-cy=intro-screen2-play]");

const getIntroStep4Header = () => cy.get("[data-cy=intro-screen4-header]");
const getIntroStep4Description = () => cy.get("[data-cy=intro-screen4-description]");
const getIntroStep4KebabMenu = () => cy.get("[data-cy=intro-screen4-kebab-menu]");
const getIntroStep4List = () => cy.get("[data-cy=intro-screen4-list]");
const getIntroStep4ProgressBar = () => cy.get("[data-cy=intro-screen4-progress-bar]");

const getLinkToForgotPassword = () => cy.get("[data-cy=login-form-link-forgot-password]");

const getVideoPlayer = () => cy.get("[data-cy=video-player]");

const getVideoPlayerCloseBtn = () => cy.get("[data-cy=video-player-close-btn]");

const getHeaderBackButton = () => cy.get("[data-cy=header-back-button]");
const getHeaderCloseButton = () => cy.get("[data-cy=header-close-button]");

const getHeaderAddButton = () => cy.get("[data-cy=add-button]");
const getScriptItem = (i: number) => cy.get(`[data-cy=list-panel-scripts-item-${i}]`);
const getNoteTypeItem = (i: number) => cy.get(`[data-cy=list-panel-note-type-item-${i}]`);

const getLoader = () => cy.get("[data-cy=loader-icon]");

export {
  getAgent,
  getHeaderAddButton,
  getHeaderBackButton,
  getHeaderCloseButton,
  getIntroStep1Arrow,
  getIntroStep1Description,
  getIntroStep1Header,
  getIntroStep2Description,
  getIntroStep2Header,
  getIntroStep2Play,
  getIntroStep2Skip,
  getIntroStep4Description,
  getIntroStep4Header,
  getIntroStep4KebabMenu,
  getIntroStep4List,
  getIntroStep4ProgressBar,
  getKebabItem,
  getLinkToForgotPassword,
  getLoader,
  getNoteTypeItem,
  getScriptItem,
  getSukiLogo,
  getVideoPlayer,
  getVideoPlayerCloseBtn
};
