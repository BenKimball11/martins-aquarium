const fishCollection = [
{
    name: "Fred",
    species:"Goldfish",
    length: 5,
    location:"neighbor's pond",
    food:"flakes",
    image: "styles/images/goldfish.jpeg", 
},
{
    name: "Dan",
    species:"Tuna",
    length: 6,
    location:"Gulf of Mexico",
    food:"little fish",
    image: "styles/images/Tuna.jpeg", 
},
{
    name: "Ken",
    species:"bass",
    length: 5,
    location:"local lake",
    food:"frogs", 
    image:"styles/images/bass.jpeg"
},
{
    name: "brax",
    species:"mahi mahi",
    length: 6,
    location:"Gulf of Mexico",
    food:"little fish", 
    image:"styles/images/MahiMahi.jpeg"
},

]

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if(fish.length % 3 === 0) {
        holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
const soldiers = []

for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0){
        soldiers.push(fish)
    }
}
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if(fish.length % 5 === 0 && fish.length % 3 !==0){ 
        }
    }

    return regularFish
}
//TODO: 
//Seperate the fish by type
//list the fish by those types
//1) Holy Fish
//2) soldiers
//3) unworthy
