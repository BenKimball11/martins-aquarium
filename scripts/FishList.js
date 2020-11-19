/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")

    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const notHolyFish = nonHolyFish()

    for (const fishObject of holyFish) {
        //console.log("one fish!", fishObject)
        const fishHTML = Fish(fishObject)
         // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML 
    }

    for (const fishObject of soldiers) {
        //console.log("one fish!", fishObject)
        const fishHTML = Fish(fishObject)
         // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML 
    }

    for (const fishObject of notHolyFish) {
        //console.log("one fish!", fishObject)
        const fishHTML = Fish(fishObject)
         // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML 
    }
}