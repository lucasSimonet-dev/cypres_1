import userData from '../fixtures/user-data.json'

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar:'.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCrecentialAlert:'[role="alert"]',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField:'[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    submitSaveButton: '[type="submit"]',


  }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard');
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type('FirsNameTest');
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest');
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest');
    cy.get(selectorsList.genericField).eq(3).clear().type('EmpIdTest');
    cy.get(selectorsList.genericField).eq(4).clear().type('OtrId');
    cy.get(selectorsList.genericField).eq(5).clear().type('DrivLicNum');
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10');
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.submitSaveButton).eq(0).click();
    cy.get('body').should('contain','Successfully Updated');
    cy.get('.oxd-toast-close');

 

  });
  it ('Login - Fail', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCrecentialAlert)

  })
});

