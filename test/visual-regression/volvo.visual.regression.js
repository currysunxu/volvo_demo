const HomePage = require('../pageobjects/home.page');

describe('Volvo image comparsion', () => {

    beforeEach(  () => {
        HomePage.open();
        browser.deleteCookies()
        HomePage.cookie_settings.waitForDisplayed()
        HomePage.accept_submit()
    })


    it('should save some screenshots', () => {
        // Save an element
        browser.saveElement(HomePage.headerVolvo, 'volvo logo Element', { /* some options */ });

        // Save a full page screenshot
        browser.saveFullPageScreen('volvoFullPage', { /* some options */ });

    });

    it('should compare successful with a baseline', () => {

        // Check an element
        expect(browser.checkElement($('#element-id'), 'volvo logo Element', { /* some options */ })).toEqual(0);

        // Check a full page screenshot
        expect(browser.checkFullPageScreen('volvoFullPage', { /* some options */ })).toEqual(0);

    });
});
