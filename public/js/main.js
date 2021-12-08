import { perso, home, emptyBasket, shop, bol, poele} from "./module/object.js";

alert((perso.nom) + " est actuellement à " + (perso.lieu))
alert((perso.nom) + " veut se préparer à manger. Pour cela, il doit se rendre à l'épicerie")
perso.seDeplacer(shop.personnes, shop.nom)
