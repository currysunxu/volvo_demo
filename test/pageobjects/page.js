/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {


    /**
    * Opens a page
    */
    open () {
        return browser.url('/intl/v/car-safety/a-million-more')
    }

    /**
    * close browser
    */
    tearDown () {
        return driver.shutdown
    }

    /**
    * accept cookie
    */
    accept_submit () {
        return this.accept.click();
    }

    sleep(delay) {
        var start = (new Date()).getTime();
        while ((new Date()).getTime() - start < delay) {
            continue;
        }
    }
}
