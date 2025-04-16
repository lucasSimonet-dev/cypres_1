class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateField:'[placeholder="yyyy-dd-mm"]',
            dateCloseButton: '.--close',
            submitSaveButton: '[type="submit"]',
            genericComboBox: '.oxd-select-text--active',
            secondItemCombobox:'.oxd-select-dropdown > :nth-child(2)',
            thirdItemCombobox:'.oxd-select-dropdown > :nth-child(3)',

        }
        return selectors
    }
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().middleNameField).clear().type(middleName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);

    }

    fillEmployeeDetails(employeeId, otherId,driversLicenseNumber,expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber);
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate);
        cy.get(this.selectorsList().dateCloseButton).click();
    }

    saveForm() {
        cy.get(this.selectorsList().submitSaveButton).eq(0).click();
        cy.get('body').should('contain','Successfully Updated');
        cy.get('.oxd-toast-close');
    }

    fillStatus() {

    }

}


export default MyInfoPage
