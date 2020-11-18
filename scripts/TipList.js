/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useTip } from './TipDataProvider.js'
import { Tip } from './Tip.js'

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tipList")
    const allTheTips = useTip()

    for (const tip of allTheTips) {
        //console.log("one fish!", fishObject)
        const tipHTML = Tip(tip)
         // Add to the existing HTML in the content element
    contentElement.innerHTML += tipHTML 
    }
}