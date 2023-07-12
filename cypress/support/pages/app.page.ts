class AppPage {
  navigateTo() {
    return cy.visit('http://localhost:3000');
  }

  get requestAnInviteButton() {
    return cy.get('#btnRequestAnInvite');
  }

  get fullNameInput() {
    return cy.get('#inpFullName');
  }

  get emailInput() {
    return cy.get('#inpEmail');
  }

  get confirmEmailInput() {
    return cy.get('#inpConfirmEmail');
  }

  get sendButton() {
    return cy.get('#btnSend');
  }

  get okButton() {
    return cy.get('#btnOk');
  }
}

export const appPage = new AppPage();
