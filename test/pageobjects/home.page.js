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
    get mainTitle () { return $('div[id="ModelIntro-1"] h1') }
    get subTitle () { return $('div[id="ModelIntro-1"] p') }
    get secondTitle () { return $('//div[@id="TextStatement-1"]//span[1]') }
    get href () { return $('//a[text()="Learn more about car safety"]/span') }
    get href_link () { return $('//a[text()="Learn more about car safety"]') }
    get secondTitleText () { return $('//div[@id="TextStatement-1"]//span[2]') }
    get safetyFeatures () { return $('#IconCallouts-1').$$('em') }
    get safetyFeaturesDesc () { return $('#IconCallouts-1').$$('p') }
    get oneOfMillionDesc () { return $('#VideoTestimonials-1').$$('p') }
    get oneOfMillionTitle () { return $('div[id="VideoTestimonials-1"] h2') }
    get modelTitle () { return $('h2[data-autoid="productListCarousel:title"]') }
    get footerLinks () { return $('footer[data-autoid="footer:container"]').$$('a') }
    get footerCopyRight () { return $('span[data-autoid="footer:copyright"]') }
    get footerCookie () { return $('span:nth-child(1) > a[data-autoid="footer:links"]') }
    get footerLegal () { return $('span:nth-child(2) > a[data-autoid="footer:links"]') }
    get titleCookie () { return $('//div[@id="ArticleSection-1"]') }
    get hidenElement () { return $('div[class="optanon-alert-box-bottom-top"]') }
    get rightArrayButton () { return $('button[data-autoid="springCarouselNextButton"]') }
    get leftArrayButton () { return $('button[data-autoid="springCarouselPreviousButton"]') }
    get modelCars () { return $$('div[data-autoid="springCarouselPane:carouselItem"] > div > a') }
    get safetyFeaturesIcon () {return $('//em[text()="Speed cap"]')}
    get oneMillionVideoSrc () {return $('video[data-autoid="videoTestimonials:video-0"] source')}
    // get oneMillionVideoSrcs () {return $('div[data-autoid="videoTestimonials:container"]').$$('source')}
    get oneMillionVideoHeaders () {return $('#VideoTestimonials-1').$$('em')}
    get oneMillionVideo () {return $('video[data-autoid="videoTestimonials:video-0"]')}
    get safetyFeaturesIconCap () {return $('svg[data-icon="speed-cap"]')}
    get safetyFeaturesIconHighWay () {return $('svg[data-icon="highway"]')}
    get safetyFeaturesIconCamera () {return $('svg[data-icon="camera2"]')}
    get safetyFeaturesIconKey () {return $('svg[data-icon="key"]')}
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
