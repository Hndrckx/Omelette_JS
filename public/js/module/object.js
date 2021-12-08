import {
    oignon,
    oeuf,
    tomate,
    fromage,
    epice
} from "./class.js"

export let perso = {
    nom: "Michel",
    lieu: "la maison",
    argent: 85,
    mainDroite: [],
    mainGauche: [],
    seDeplacer: function (a,z) {
        a.push(perso)
        perso.lieu = a.nom
        alert((perso.nom) + " est à " + (z))
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
    },
    prendre: function(e, f){
        for (let i = 0; i < 5; i++){
            e.push(f)
        }
    }
}

export let home = {
    nom: "la maison",
    personnes: [perso],
}

export let emptyBasket = {
    contenu: [],
}

export let shop = {
    nom: "l'épicerie",
    personnes: [],
    baskets: [emptyBasket, emptyBasket, emptyBasket],
    contenu: [oignon, oeuf, tomate, fromage, epice],
}

export let bol = {
    nom: "Bol",
    contenu: [],
    melanger: function (g) {
        g = mixRaw
    }
}

export let poele = {
    nom: "Poêle",
    contenu: [],
    cuir: function (h) {setTimeout(()=> {h = "cuit"}, 4000)
    alert("L'Omelette est prête")
    }
}