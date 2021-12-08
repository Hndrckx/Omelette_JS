import { perso, home, emptyBasket, shop, bol, poele} from "./module/object.js";


//Introduction
alert((perso.nom) + " est actuellement à " + (perso.lieu))
alert((perso.nom) + " veut se préparer à manger. Pour cela, il doit se rendre à l'épicerie")

//Course
perso.seDeplacer(shop.personnes, shop.nom);
perso.mainDroite.push(shop.baskets[1])
console.log(perso.mainDroite)
alert((perso.nom) + " a pris un panier")
perso.prendre(perso.mainDroite[0].contenu, shop.contenu)
console.log(perso.mainDroite[0].contenu);
