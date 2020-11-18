const fishCollection = [
{
    name: "Fred",
    species:"Goldfish",
    length: 3,
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
