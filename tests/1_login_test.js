
Feature('Login Test');

Scenario('test login', (I) => {
  I.retry({ retries: 3, maxTimeout: 3000 }).amOnPage('http://automationpractice.com');
  // I.waitForElement('.login', 30);
//   I.see('Women');
  I.click('.login');
  I.see('Email address');
  I.fillField('#email', 'ysmen17@gmail.com');
  I.fillField('Password', 'gull1');
  I.click('#SubmitLogin');
  I.see('MY WISHLISTS');
});