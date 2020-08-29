
Feature('Searching');

// Before(login => {
//     login('user');
// });

Scenario('test searching', (I) => {
    I.amOnPage('http://automationpractice.com');
     // I.see('Women');
    // I.click('.login');
    // I.see('Email address');
     I.fillField('#search_query_top', 'Blouse');
    // I.fillField('Password', 'gull1');
     I.click('submit_search');
    I.seeElement('ul.product_list.grid.row');
  });

