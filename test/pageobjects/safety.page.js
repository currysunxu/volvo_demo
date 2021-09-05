const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SafetyPage extends Page {

    get headerSafety () { return $('//h2[text()="Car safety"]') }
    get subHeaderSafety () { return $('//h2[text()="Car safety"]/following::p[1]') }



}


module.exports = new SafetyPage();
