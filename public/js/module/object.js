import {
    oignon,
    oeuf,
    tomate,
    fromage,
    epice
} from "./class.js"

let perso = {
    nom: "Michel",
    lieu: "la maison",
    argent: 85,
    mainDroite: [],
    mainGauche: [],
    seDéplacer: function (a) {
        a.push(perso)
        perso.lieu = a.nom
        alert((perso.nom) + " est à " + (perso.lieu))
    },
    payer: function (b) {
        b.forEach(item => {
            perso.argent - item.prix
        });
        alert("Il reste " + (perso.argent) + "€ à " + (perso.nom))
    },
    couper: function (c, d) {
        c.forEach(item => {
            if (item.etat == "entier") {
                item.etat = "coupé";
                d.push(item)
                alert((item.nom) + "a été coupé et mis dans le bol.")
            } else {
                d.push(item)
                alert((item.nom) + "a été mis dans le bol.")
            }
        })
    }
}

let home = {
    nom: "la maison",
    personnes: [perso],
}

let emptyBasket = {
    contenu: [],
    type: panier,
}

let shop = {
    nom: "l'épicerie",
    personnes: [],
    baskets: [emptyBasket, emptyBasket, emptyBasket],
    contenu: [oignon, oeuf, tomate, fromage, epice],
}