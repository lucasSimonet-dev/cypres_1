import userData from '../fixtures/user-data.json';
import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';


const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login OrangeOrange HRM Test', () => {

  it ('Login - Fail', () => {
    loginPage.acessLoginPage();
    loginPage.loginAnyWithUser(userData.userFail.username, userData.userSucess.password);
    loginPage.checkAcessInvalid();


  })

  it ('Login - Success', () => {
    loginPage.acessLoginPage();
    loginPage.loginAnyWithUser(userData.userSucess.username, userData.userSucess.password);
    dashboardPage.checkDashboardPage();
  })

});

