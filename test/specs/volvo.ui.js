const HomePage = require('../pageobjects/home.page');


describe('Volvo ui text validation', () => {

    beforeEach(  () => {
        HomePage.open();
        browser.deleteCookies()
        HomePage.cookie_settings.waitForDisplayed()
        HomePage.accept_submit()
    })


    it('check title text', async () => {

        await expect(HomePage.subTitle).toBeExisting()
        await expect(HomePage.subTitle).toHaveTextContaining("After we introduced the 3-point safety belt, we faced a world of criticism.")
        await expect(HomePage.mainTitle).toBeExisting()
        await expect(HomePage.mainTitle).toHaveTextContaining("Ideas that change ")
    });

    it('check video text', async () => {

        await expect(HomePage.video_button).toBeExisting()
        await expect(HomePage.video_button).toHaveTextContaining("WATCH THE STORY")

    });
});


