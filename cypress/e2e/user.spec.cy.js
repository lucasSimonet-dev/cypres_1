import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';
import MenuPage from '../pages/menuPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe('Orange HRM Test', () => {

  const selectorsList = {
   
      sectionTitleTopBar:'.oxd-topbar-header-breadcrumb-module',
      dashboardGrid: '.orangehrm-dashboard-grid',
      firstNameField: '[name="firstName"]',
      middleNameField: '[name="middleName"]',
      lastNameField: '[name="lastName"]',
      genericField: '.oxd-input--active',
      dateField:'[placeholder="yyyy-dd-mm"]',
      dateCloseButton: '.--close',
      submitSaveButton: '[type="submit"]',
      genericComboBox: '.oxd-select-text--active',
      secondItemCombobox:'.oxd-select-dropdown > :nth-child(2)',
      thirdItemCombobox:'.oxd-select-dropdown > :nth-child(3)'
  }
  
  it.only('User Info Update - Sucess', () => {
    loginPage.acessLoginPage();
    loginPage.loginAnyWithUser(userData.userSucess.username, userData.userSucess.password);

    dashboardPage.checkDashboardPage();

    menuPage. acessMyInfo();



    /*
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

    cy.get(selectorsList.genericComboBox).eq(0).click();
    cy.get(selectorsList.thirdItemCombobox).click();

    cy.get(selectorsList.genericComboBox).eq(1).click();
    cy.get(selectorsList.secondItemCombobox).click();

    cy.get(selectorsList.dateField).eq(1).clear().type('2000-12-02');
    cy.get(selectorsList.dateCloseButton).click();

    cy.get(selectorsList.submitSaveButton).eq(0).click();
    cy.get('body').should('contain','Successfully Updated');
    cy.get('.oxd-toast-close');

    cy.get(selectorsList.genericComboBox).eq(2).click();
    cy.get(selectorsList.thirdItemCombobox).click();
    cy.get('[options=""]').eq(0).click().clear().type('testee');

    cy.get(selectorsList.submitSaveButton).eq(1).click();
    cy.get('body').should('contain','Successfully Saved');
    cy.get('.oxd-toast-close');

  });
  it ('Login - Fail', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCrecentialAlert)*/

  })
});

