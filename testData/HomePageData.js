/**
 * test data separated from test case
 */
class HomePageData {

    get expectedSafetyFeatures() {
        return ["Speed cap", "Highway pilot", "Driver monitoring cameras", "Care Key"]
    }

    // get mockCookie() {
    //     return {"_hjAbsoluteSessionInProgress":"0",
    //     "OptanonAlertBoxClosed":"2028-09-01T08:05:09.696Z",
    //     "_hjIncludedInPageviewSample":1,
    //     "_hjIncludedInSessionSample":0,
    //     "_hjid":"b1bfe402-efea-4616-9f7c-a7f3d009124c"
    //     }
    // }

    get expectedSafetyFeaturesDesc() {
        return ["To send a strong signal about the dangers of speeding, we reduced the top speed of all our new cars to 180 km/h in 2020. We are also looking at how smart speed control and geofencing technology could automatically limit speeds near schools and hospitals in the future."
            , "With support from LiDAR sensors, the next generation of Volvo cars will be hardware-ready for autonomous drive. And over time, we will push out over-the-air software updates to provide fully autonomous highway driving."
            , "To help address intoxication and distraction in traffic, we are working on new in-car solutions. Driver monitoring cameras, together with other sensors, will allow the car to intervene when a clearly intoxicated or distracted driver risks serious injury or death."
            , "We've recently introduced the Care Key, aimed at addressing speeding. With the Care Key, Volvo car owners can put a speed cap on the car when lending it to a younger family member or less experienced driver as a way of ensuring a safer ride."
            , "Features depicted may not be standard or available for all styles, engine options, model years and regions."]
    }
    get expectedOneOfMillionDesc() {
        return ["Hear the stories from real car crash survivors and see how they've managed to turn an accident into a positive change in their lives."
            , "Meet Amy Ma, who survived a multi-vehicle collision thanks to the safety belt."
            , "Hear Summer talk about the collision that destroyed her car, but spared her life thanks to the safety belt."
            , "If it wasn't for the safety belt, Linda & Molly's trip to a ski resort could've been their last."
            , "Alex talks about the collision that nearly took his life, but since he was wearing a safety belt only left him with a scar."
            ]
    }


}


module.exports = new HomePageData();
