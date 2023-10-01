
let a = "paul"
let b = "jean"
var result

 function checkname (name1, name2) {
    return name1 == name2
 }
 
result = checkname(a,b)
console.log(result)




let e = "5"
let f = "3"

function subtraction (number1, number2) {
    return  number1 - number2

}
result = subtraction (e,f)
console.log (result)


let names = []
 names.push ("vincent", "paul", "arthur")
names.forEach(name => {
    name += " va à la peche "
    console.log(name)
})


let user = {
    firstname : "raphael",
    lastname  : "de-brito",
    passion   : "football",
    birthday  : "22/07/2004",
}
let sentence = user.firstname + " " + user.lastname + " adore le" + " " + user.passion + " et est née le " + user.birthday
console.log (sentence) 


class pokemon {
    constructor(name,pv,atk,def,luck) {
        this.name = name 
        this.pv = pv 
        this.atk = atk
        this.def = def 
        this.luck = luck

      attackpokemon (b){
        b.hp -= this.atk
    }
    
    
}


isLuck() {
    if (Math.random()<= this.luck)  {
        return true
    } else {
        return false
    }
}

let bulbizarre = new pokemon ("bulbizarre", 80, 15, 7 )
let roucool  = new pokemon ("roucool", 75, 14, 4 )
 
while ((bulbizarre.pv>0) && (roucool.pv>0)){
    roucool.attackpokemon(bulbizarre) 
    if(this.luck)
    if (bulbizarre.pv<=0) {
        console.log("bulbizarre est mort, roucool a gagné!")
    } else {
        bulbizarre.attackpokemon(roucool)
        if (roucool.pv<=0) {
            console.log("roucool est mort, bulbizarre a gagné!")
        }
        
    }
    
}


let users = ["stephanie", "gaia", "michel", "roberto", "julie"]
function countCharacter(value)  [
     return value.lenght()
]
 
users.forEach (users  => {
    console.log(coucntCharacter(users))
    if (countCharacter(users)<5) {
        console.log ("c'est un prenom long de plus de 5 lettres")
    } else {
        console.log ("ce n'est pas du tout un prenom long")
    }
})