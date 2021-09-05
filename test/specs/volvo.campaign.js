const HomePage = require('../pageobjects/home.page');
const HomePageData = require('../../testData/HomePageData');
const SafetyPage = require('../pageobjects/safety.page');

describe('Volvo campaign scenario validation', () => {

    beforeEach(() => {
        HomePage.open();
        browser.maximizeWindow()
        browser.deleteAllCookies()
        // browser.refresh()
        HomePage.cookie_settings.waitForDisplayed()
        HomePage.accept_submit()
    })


    it('check the campaign title', async () => {
        const elem = HomePage.secondTitle
        // scroll to specific element
        await elem.scrollIntoView();
        await expect(HomePage.secondTitle).toBeExisting()
        await expect(HomePage.secondTitle).toHaveTextContaining("A million more.")
        await expect(HomePage.secondTitleText).toBeExisting()
        await expect(HomePage.secondTitleText).toHaveTextContaining("With new and existing safety features, we are determined to save a million more lives.")
    });

    it('check each safety Features title', async () => {
        const expectedSafetyFeatures = HomePageData.expectedSafetyFeatures
        const safetyFeaturesIcon = HomePage.safetyFeaturesIcon
        const safeFeatures = HomePage.safetyFeatures
        await safetyFeaturesIcon.scrollIntoView();
        await safetyFeaturesIcon.waitForDisplayed()

        await safeFeatures.map(async (safeFeature, index) => {
            console.log("enter map")
            await browser.waitUntil(
                async () => (await expect(safeFeature).toHaveTextContaining(expectedSafetyFeatures[index]),
                        {
                            timeout: 2000,
                            timeoutMsg: 'expected text to be different after 5s'
                        }
                ))
        })
    });

    it('check each safety Features description', async () => {
        const expectedSafetyFeaturesDesc = HomePageData.expectedSafetyFeaturesDesc
        const safeTitle = HomePage.secondTitle
        const safeFeaturesDesc = HomePage.safetyFeaturesDesc
        await safeTitle.scrollIntoView();
        await safeFeaturesDesc.map(async (actualDesc, index) => {
            console.log("enter map")
            console.log(await actualDesc.getText())
            console.log(await expectedSafetyFeaturesDesc[index])
            console.log(await index)
            await expect(actualDesc).toHaveTextContaining(expectedSafetyFeaturesDesc[index])
        });

    });

    it('check each safety Features icon display well', async () => {
        const safeTitle = HomePage.secondTitle
        await safeTitle.scrollIntoView();
        HomePage.sleep(2000)
        await HomePage.safetyFeaturesIconCap.waitForDisplayed()
        await expect(HomePage.safetyFeaturesIconCap).toBeDisplayed()
        await expect(HomePage.safetyFeaturesIconHighWay).toBeDisplayed()
        await expect(HomePage.safetyFeaturesIconCamera).toBeDisplayed()
        await expect(HomePage.safetyFeaturesIconKey).toBeDisplayed()

    });

    it('check hyperlink correct', async () => {
        const subTitle = HomePage.secondTitleText
        await subTitle.scrollIntoView()
        await expect(HomePage.href).toBeClickable()
        await expect(HomePage.href_link).toHaveAttribute("href")
        await expect(HomePage.href_link).toHaveLink("https://www.volvocars.com/intl/v/car-safety")
    });

    it('check one onf million correct', async () => {
        const subTitle = HomePage.oneOfMillionTitle
        const expectedOneOfMillionDesc = HomePageData.expectedOneOfMillionDesc
        await subTitle.scrollIntoView()
        const oneOfMillionDesc = HomePage.oneOfMillionDesc

        await expect(HomePage.oneOfMillionTitle).toHaveText("One of a million")

        for (let i = 0; i < await oneOfMillionDesc.length; i++) {
            console.log("enter for loop!")
            console.log("dynamically scroll to specific element!")
            await oneOfMillionDesc[i].scrollIntoView()
            console.log(await oneOfMillionDesc[i].getText())
            await expect(oneOfMillionDesc[i]).toHaveTextContaining(expectedOneOfMillionDesc[i])
        }
    });

    it('check safety videos play well', async () => {
        const oneOfVideo = HomePage.oneOfMillionTitle
        const videoHeaders = HomePage.oneMillionVideoHeaders
        await oneOfVideo.scrollIntoView()
        let videoSource = await HomePage.oneMillionVideoSrc
        let oneVideoUrl = await videoSource.getAttribute("src")
        console.log(oneVideoUrl)
        await browser.url(oneVideoUrl)
        HomePage.sleep(2000)
        await $('body > video').isDisplayed()

        // for (let i = 0; i < await videoHeaders.length; i++) {
        //     await oneVideo.scrollIntoView()
        //     console.log("enter for loop!")
        //     console.log("dynamically scroll to specific element!")
        //     if (i%2===0 && i!==0){
        //         await videoHeaders[i].scrollIntoView()
        //     }
        //     HomePage.sleep(2000)
        //     let videoSources = await HomePage.oneMillionVideoSrcs
        //     let oneVideoUrl = await videoSources[i].getAttribute("src")
        //     console.log(oneVideoUrl)
        //     await browser.url(oneVideoUrl)
        //     HomePage.sleep(2000)
        //     await $('body > video').isDisplayed()
        // }
    });

    it('check next array button work well', async () => {
        const modelTitle = HomePage.modelTitle
        await modelTitle.scrollIntoView()
        console.log("before loop!")
        let rightArrayButton = await HomePage.rightArrayButton
        await HomePage.modelCars.map(async (i) => {
            await rightArrayButton.click()
            if (i === HomePage.modelCars.length - 1) {
                await expect(HomePage.modelCars[i]).toHaveLinkContaining("/intl/v/cars/s60-hybrid")
            }
        });

    });

    it('check previous array button work well', async () => {
        const modelTitle = HomePage.modelTitle
        await modelTitle.waitForDisplayed()
        await modelTitle.scrollIntoView()
        console.log("before loop!")
        let rightArrayButton = await HomePage.rightArrayButton
        let leftArrayButton = await HomePage.leftArrayButton
        await HomePage.modelCars.map(async (i) => {
            await rightArrayButton.click()
        });

        await HomePage.modelCars.map(async (i) => {
            await leftArrayButton.click()
            if (i === HomePage.modelCars.length - 1) {
                await expect(HomePage.modelCars[i]).toHaveLinkContaining("/intl/v/cars/xc90-hybrid")
            }
        });

    });

    it('check footer work well', async () => {
        const footerCopyRight = HomePage.footerCopyRight
        await footerCopyRight.scrollIntoView()
        await expect(footerCopyRight).toHaveTextContaining("Copyright © 2021 Volvo Car Corporation (or its affiliates or licensors)")

        const cookieLink = HomePage.footerCookie.getAttribute('href')
        console.log("cookieLink")
        console.log(await cookieLink)
        await browser.newWindow(await cookieLink, {
            windowName: 'Volvo window',
            windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
        })
        // if (await HomePage.hidenElement.isExisting()){
        //     browser.refresh()
        // }
        // await browser.executeScript("document.evaluate('//a[text()=\"Cookies\"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()")
        // // await HomePage.footerCookie.click()
        // HomePage.sleep(2000)
        // await expect(browser.getUrl()).toHaveTextContaining("https://www.volvocars.com/intl/v/legal/cookies")
        // HomePage.sleep(2000)

        const handles = await browser.getWindowHandles()

        await browser.switchToWindow(handles[1])
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])

    });


});


