const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get accept () { return $('button[title="Accept"]') }

    get headerVolvo () { return $('#site-nav-topbar-wrapper  a') }
    get headerOurCars () { return $('span[data-testid="nav:carsLabelContainer"]') }
    get menu () { return $('span[data-testid="burger"]') }
    get menus () { return $('div[data-autoid="nav:sideNavLinksMenu"]') }
    get mainTitle () { return $('div[id="ModelIntro-1"] h2') }
    get subTitle () { return $('div[id="ModelIntro-1"] p') }
    get cookie_settings () { return $('button[title="Cookie Settings"]') }
    get video_button () { return $('div[class="a cn"] > button[type="button"]') }
    get hybrid_car_xc () { return $('#site-nav-cars-menu-section-panel-1 a[href="/intl/v/cars/xc90-hybrid"]') }
    get hybrid_car_s90 () { return $('#site-nav-cars-menu-section-panel-1 a[href="/intl/v/cars/s90-hybrid"]') }
    get hybrid_car_s60 () { return $('#site-nav-cars-menu-section-panel-1 a[href="/intl/v/cars/s60-hybrid"]') }

    get electric_button () { return $('//*[@id="site-nav-cars-menu-section-tab-0"]/h2') }
    get electric_car_xc40 () { return $('#site-nav-cars-menu-section-panel-0 a[href="/intl/v/cars/xc40-electric"]') }
    get electric_car_c40 () { return $('#site-nav-cars-menu-section-panel-0 a[href="/intl/v/cars/c40-electric"]') }



}


module.exports = new HomePage();
