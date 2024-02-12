/**
 * Initialiser un objet panier vide qui sera utilisé sur la page.
 */
function initialiser(){
    // J'initialise le panier avec des fruits par défaut pour mettre toutes les valeurs à 0
    // Ça va me servir dans le calcul du total.
    panier = new Panier(new Fruit(), new Fruit(), new Fruit());  // Seul le panier va être global. On l'initialise au chargement de la page.
}

/**
 * Valider un fruit, calculer le sous-total et ajouter le fruit dans le panier puis mettre à jour le total.
 * @param fruit Nom du fruit à ajouter
 */
function valider(fruit){
    // Récupérer les variables
    let nbFruit = +document.getElementById("nb"+fruit).value;
    let prix = +document.getElementById("prix"+fruit).innerText;
    let sousTotal = 0;

    // Valider le nombre de fruits
    if (nbFruit < 0 || nbFruit > 24)
    {
        document.getElementById("erreur"+fruit).innerText = "Doit être entre 0 et 24";
        document.getElementById("erreur"+fruit).classList.remove("invisible");
        document.getElementById("submit").setAttribute("disabled", "true");
    }
    // Afficher le sous-total
    else {
        document.getElementById("erreur"+fruit).innerText = "";
        document.getElementById("erreur"+fruit).classList.add("invisible");
        sousTotal = +nbFruit * +prix;
        document.getElementById("sousTotal"+fruit).innerText = sousTotal;
        document.getElementById("submit").removeAttribute("disabled");
    }

    // Créer les objets fruits et les mettre dans le panier
    let nouveauFruit = new Fruit(fruit, prix, nbFruit, sousTotal);
    if (fruit === "Peches"){
        panier.peches = nouveauFruit;
    }
    else  if(fruit === "Poires"){
        panier.poires = nouveauFruit;
    }
    else {
        panier.pommes = nouveauFruit
    }

    // Calculer le total
    panier.total = +panier.peches.sousTotal + +panier.poires.sousTotal + +panier.pommes.sousTotal;
    document.getElementById("total").innerText = panier.total;
}

/**
 * Valide le panier et envoie le formulaire, dans cette version les données sont envoyées par l'URL (seulement les quantités)
 * @returns {boolean} retourne false si le panier n'est pas valide pour empêcher l'envoi.
 */
function envoyer(){

    // Validation du panier
    if (+panier.total < 20){
        document.getElementById("erreurPanier").classList.remove("invisible");
        document.getElementById("erreurPanier").innerText = "La valeur minimale des paniers est de 20$.";
        return false;
    }
    else if (+panier.peches.quantite + +panier.poires.quantite + +panier.pommes.quantite > 24){
        document.getElementById("erreurPanier").classList.remove("invisible");
        document.getElementById("erreurPanier").innerText = "Le nombre total de fruit ne doit pas dépasser 24.";
        return false;
    }
    else {
        document.getElementById("erreurPanier").classList.add("invisible");

/*      // Autres versions
        // Inscririre les données dans la session
        //sessionStorage.setItem("nbPommes", document.getElementById("nbPommes").value);

        // Créer le panier
        //let monPanier = new Panier(nouveauFruit, 0, 0, nouveauFruit.sousTotal);

        // Inscrire le panier dans la session pour y avoir accès sur la deuxième page.
        // sessionStorage.setItem("panier", panier);

 */

        return true;
    }
}
