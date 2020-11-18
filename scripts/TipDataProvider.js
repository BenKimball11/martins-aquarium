const tipCollection = [
    {
       text: "Clean your tank when it gets dirty."
    },
    
    {
        text: "Keep cats away from an open tank!"
    },
    {
        text: "Be sure not to overfeed"
    }
    ]
    
    export const useTip = () => {
        return tipCollection.slice()
    }
    