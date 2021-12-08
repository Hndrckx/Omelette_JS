import { perso, home, emptyBasket, shop, bol, poele} from "./module/object.js";


//Introduction
console.log((perso.nom) + " est actuellement à " + (perso.lieu))
console.log((perso.nom) + " veut se préparer à manger. Pour cela, il doit se rendre à l'épicerie")

//Course
perso.seDeplacer(shop.personnes, shop.nom);
perso.mainDroite.push(shop.baskets[1])
console.log(perso.mainDroite)
console.log((perso.nom) + " a pris un panier")
perso.prendre(perso.mainDroite[0].contenu, shop.contenu)
console.log(perso.mainDroite[0].contenu)
console.log((perso.nom) + " va passer en caisse")
perso.payer(perso.mainDroite[0].contenu)

//Cuisine Part 1
perso.seDeplacer(home.personnes, home.nom)
console.log((perso.nom) + " va enfin pouvoir se mettre aux fourneaux")
perso.couper(perso.mainDroite[0].contenu,bol.contenu)

//Pause Panier
