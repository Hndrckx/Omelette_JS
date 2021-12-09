class Ingredient {
    constructor(nom, etat, prix){
        this.nom = nom
        this.etat = etat
        this.prix = prix
    }
}
export let oignon = new Ingredient ("Oignon", "entier", 1)
export let oeuf = new Ingredient ("Oeufs", "en boite", 3)
export let tomate = new Ingredient ("Tomate", "entier", 2)
export let fromage = new Ingredient ("Fromage Rapé", "en sachet", 3)
export let epice = new Ingredient ("Épices", "moulu", 4)
export let omelette = new Ingredient ("Omelette", "cru", 0)