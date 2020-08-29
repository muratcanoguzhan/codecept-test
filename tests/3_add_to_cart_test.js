Feature('add_to_cart');

Scenario('Add To Cart', (I) => {
    I.moveCursorTo("#block_top_menu > ul > li:nth-child(2) > a");
    I.click('//*[@id="block_top_menu"]/ul/li[2]/ul/li[3]/a');
    I.seeElement('ul.product_list.grid.row');
    I.moveCursorTo("#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-in-line.last-line.first-item-of-tablet-line.last-item-of-mobile-line.last-mobile-line > div");
    I.click('//*[@id="center_column"]/ul/li[3]/div/div[2]/div[2]/a[1]');
    I.wait(3);
    I.click('.shopping_cart > a');
    I.see('Printed Chiffon Dress');

});
