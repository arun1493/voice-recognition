const getDoctorName = () => cy.get("[data-cy=doctor-name]");
const getHamburgerMenu = () => cy.get("[data-cy=hamburger-menu]");
const getLogoutItem = () => cy.get("[data-cy=main-menu-item-logout]");
const getMainMenu = () => cy.get("[data-cy=main-menu]");
const getMainMenuItem = (i: number) => cy.get(`[data-cy=main-menu-item-${i}]`);

export { getDoctorName, getHamburgerMenu, getLogoutItem, getMainMenu, getMainMenuItem };
