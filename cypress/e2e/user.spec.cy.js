import userData from '../fixtures/user-data.json';
import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const Chance = require('chance');
const Moment = require('moment');

const moment = new Moment();
const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Test', () => {


  
  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage();
    loginPage.loginAnyWithUser(userData.userSucess.username, userData.userSucess.password);

    dashboardPage.checkDashboardPage();

    menuPage.acessMyInfo();

    myInfoPage.fillPersonalDetails(chance.first(),chance.word(),chance.last());
    myInfoPage.fillEmployeeDetails(chance.integer({ min: 100, max: 10000 }),
    chance.integer({ min: 1000, max: 1500 }),
    chance.integer({ min: 1800, max: 9200}),
    moment.format('YYYY-MM-DD')
  );
    myInfoPage.saveForm();

  });

});

