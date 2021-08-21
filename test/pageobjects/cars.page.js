const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CarsPage extends Page {
    /**
     * define selectors using getter methods
     */

    get shop () { return $('div[data-autoid="pdpsubmenu:nav-desktop"] a[href*="https://www.volvocars.com/intl/build"]') }
    get title () { return $('h2[data-autoid="stage-intro:title"]') }
    get review () { return $('a[data-autoid="conclusionStage:reviewCTA"]') }

    get specific_car () { return $(this.waitForXPath('//*[@id="site-nav-cars-menu-section-panel-1"]//em[text()="S90 Recharge"]')) }


}

module.exports = new CarsPage();
