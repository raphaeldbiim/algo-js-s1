class Character {
    constructor (name, hp ) {
        this.name = name 
        this.hp = hp 
    }
}

let john = new Character("john", 10)


let musics = ["wejdene anissa", "outside ellie goulding", "you right doja cat", "lovely billie eillish","arcade duncean laureance " ]


 function traject(playlist) {
    console.log(playlist)
    numberTaxiChange = 0
    redLightsNumbers = 0
    while (redLightsNumbers<30 && Character.hp> 0) {
        son = Math.floor(Math.random()*5)
        redLightsNumbers += 1
        redLightsRemaining = 30 - redLightsNumbers
        console.log (playlist[son],redlightsRemaining)
     
        if (playlist[son] == "wejdene anissa") {
             Character.hp -= 1
             numberTaxiChange += 1
        }
        if (Character.hp == 0) {
             console.log ("john a explosé")
             break
        }
        if (redLightsNumbers == 30) {
            console.log ("john est arrivé à destination, il a prit ", numberTaxiChange, " taxis " )
            break
        }
    

      
         

      }
     
    }
traject(musics)