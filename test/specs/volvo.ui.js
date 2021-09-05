const HomePage = require('../pageobjects/home.page');
const HomePageData = require('../../testData/HomePageData');
const SafetyPage = require('../pageobjects/safety.page');

describe('Volvo ui text validation', () => {

    beforeEach(  () => {
        HomePage.open();
        browser.deleteAllCookies()
        HomePage.cookie_settings.waitForDisplayed()
        HomePage.accept_submit()
    })


    it('check title text', async () => {
        await HomePage.subTitle.waitForDisplayed
        await expect(HomePage.subTitle).toHaveTextContaining("After we introduced the 3-point safety belt, we faced a world of criticism.")
        await HomePage.mainTitle.waitForDisplayed
        await expect(HomePage.mainTitle).toHaveTextContaining("Ideas that change the world are often the most controversial.")
    });

    it('check video text', async () => {

        await expect(HomePage.video_button).toBeExisting()
        await expect(HomePage.video_button).toHaveTextContaining("WATCH THE STORY")

    });


});


