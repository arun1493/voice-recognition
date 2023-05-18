const getPatientsListFromMenu = () => cy.get("[data-cy=patients-list-icon]");
const getScheduleTab = () => cy.get("[data-cy=patients-schedule-tab]");
const getListTab = () => cy.get("[data-cy=patients-list-tab]");
const getAddPatientsButton = () => cy.get("[data-cy=add-patients-button]");
const getPatientName = () => cy.get("[data-cy=patient-name]");
const getPatientAge = () => cy.get("[data-cy=patient-age]");
const getPatientGender = () => cy.get("[data-cy=patient-gender]");
const getPatientAppointmentTime = () => cy.get("[data-cy=patient-appointment-time]");
const getStatusCell = () => cy.get("[data-cy=status-cell]");
const getListPanelSchedule = (i: number) => cy.get(`[data-cy=list-panel-schedule-${i}]`);
const getListPanelList = (i: number) => cy.get(`[data-cy=list-panel-list-${i}]`);

export {
  getAddPatientsButton,
  getListPanelList,
  getListPanelSchedule,
  getListTab,
  getPatientAge,
  getPatientAppointmentTime,
  getPatientGender,
  getPatientName,
  getPatientsListFromMenu,
  getScheduleTab,
  getStatusCell
};
