const HomePage = require('../pageobjects/home.page');


describe('Volvo buy hybrid car testing', () => {

    before( () => {
        HomePage.open();
        browser.deleteCookies()
        HomePage.cookie_settings.waitForDisplayed()
        HomePage.accept_submit()
    })


    it('check buy s90 by Our cars entry  ', async () => {
        await HomePage.headerOurCars.waitForDisplayed()
        await expect(HomePage.headerOurCars).toBeExisting()
        await HomePage.headerOurCars.click()
        await expect(HomePage.hybrid_car_s90).toHaveHrefContaining("/intl/v/cars/s90-hybrid")
    });


    it('check buy xc90 by Our cars entry ', async () => {
        await HomePage.headerOurCars.waitForDisplayed()
        await expect(HomePage.headerOurCars).toBeExisting()
        await HomePage.headerOurCars.click()
        await expect(HomePage.hybrid_car_s60).toHaveHrefContaining("/intl/v/cars/s60-hybrid")
    });

    it('check buy xc90 by Our cars entry ', async () => {
        await HomePage.headerOurCars.waitForDisplayed()
        await expect(HomePage.headerOurCars).toBeExisting()
        await HomePage.headerOurCars.click()
        await expect(HomePage.hybrid_car_xc).toHaveHrefContaining("/intl/v/cars/xc90-hybrid")
    });

});
