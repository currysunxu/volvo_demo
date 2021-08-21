const HomePage = require('../pageobjects/home.page');


describe('Volvo buy hybrid car c40', () => {

    before(() => {
        HomePage.open();
        browser.deleteCookies()
        HomePage.cookie_settings.waitForExist()
        HomePage.accept_submit()

    })

    it('check buy c40 by Our cars entry  ', async () => {
        await HomePage.headerOurCars.waitForDisplayed()
        await expect(HomePage.headerOurCars).toBeExisting()
        await HomePage.headerOurCars.click()
        await HomePage.electric_button.click()
        await expect(HomePage.electric_car_c40).toHaveHrefContaining("/intl/v/cars/c40-electric")
    });


});

describe('Volvo buy hybrid car xc40', () => {

    before(() => {
        HomePage.open();
        browser.deleteCookies()
        HomePage.cookie_settings.waitForExist()
        HomePage.accept_submit()
    })


    it('check buy xc40 by Our cars entry  ', async () => {
        await HomePage.headerOurCars.waitForDisplayed()
        await expect(HomePage.headerOurCars).toBeExisting()
        await HomePage.headerOurCars.click()
        await HomePage.headerOurCars.waitForExist()
        await HomePage.electric_button.click()
        await expect(HomePage.electric_car_xc40).toHaveHrefContaining("/intl/v/cars/xc40-electric")
    });


});
