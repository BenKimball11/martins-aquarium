/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const allTheLocations = useLocation()

    for (const location of allTheLocations  ) {
        const locationHTML = Location(location)
         // Add to the existing HTML in the content element
    contentElement.innerHTML += locationHTML 
    }
}