import { appPage } from '../../support/pages/app.page';

describe('App', () => {
  it('should send an invitation successfully', () => {
    appPage.navigateTo();
    appPage.requestAnInviteButton.click();
    appPage.fullNameInput.type('Hung Le');
    appPage.emailInput.type('hung@le.com');
    appPage.confirmEmailInput.type('hung@le.com');
    appPage.sendButton.click();
    appPage.okButton.click();

    appPage.sendButton.should('not.exist');
    appPage.okButton.should('not.exist');
  });
});
