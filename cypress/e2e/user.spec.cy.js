import userData from '../fixtures/user-data.json';
import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

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

    myInfoPage.fillPersonalDetails('Lucas','Simon','hauuha');
    myInfoPage.fillEmployeeDetails('EmployId',"Other ID",'1234','2025-07-29');
    myInfoPage.saveForm();

  });

});

