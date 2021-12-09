import {
    oignon,
    oeuf,
    tomate,
    fromage,
    epice,
    omelette,
} from "./class.js"

export let perso = {
    nom: "Michel",
    lieu: "la maison",
    argent: 85,
    mainDroite: [],
    mainGauche: [],
    seDeplacer: function (a, z) {
        a.push(perso)
        perso.lieu = a.nom
        console.log((perso.nom) + " est à " + (z))
    },
    payer: function (b) {
        b.forEach(item => {
            perso.argent -= item.prix
        });
        console.log("Il reste " + (perso.argent) + "€ à " + (perso.nom))
    },
    couper: function (c, d) {
        c.forEach(item => {
            if (item.etat == "entier") {
                item.etat == "coupé";
                d.push(item)
                console.log((item.nom) + " a été coupé et mis dans le bol.")
            } else {
                d.push(item)
                console.log((item.nom) + " a été mis dans le bol.")
            }
            //for (let i = 0; c.length > 0; i++) {
            //    c.splice(c.indexOf(c[i]));
            //    i--;
           // }
        })
    },
    prendre: function (e, f) {
        for (let i = 0; i < 5; i++) {
            e.push(f[i])
            console.log((perso.nom) + " a pris " + (f[i].nom))
        }
    }
}

export let home = {
    nom: "la maison",
    personnes: [perso],
}

export let emptyBasket = {
    nom: "Panier",
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
        g = omelette
        console.log((perso.nom) + " a fini de préparer le mélange, il ne reste plus qu'à le mettre dans la poêle");
    }
}

export let poele = {
    nom: "Poêle",
    contenu: [],
    cuir: function (h) {
        setTimeout(() => {
            if (h.etat == "cru"){
                h.etat == "cuit"
                console.log("L'Omelette est prête")
            } else {
                console.log("La cuisson n'est pas encore finie")
            }
        }, 4000)
    }
}