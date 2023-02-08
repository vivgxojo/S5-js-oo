class Fruit{
    constructor(nom="", prix=0, quantite=0, sousTotal=0) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.sousTotal = sousTotal;
    }

    toString(){
        return this.quantite + " " + this.nom + " à " + this.prix + " : " + this.sousTotal;
    }
}

class Panier{
    constructor(peches, poires, pommes, total=0) {
        this.peches = peches;
        this.poires = poires;
        this.pommes = pommes;
        this.total = total;
    }

    toString(){
        return this.peches + "<br>" + this.poires + "<br>" + this.pommes + "<br>Total : " + this.total;
    }
}

function initialiser(){
    // J'initialise le panier avec des fruits par défaut pour mettre toutes les valeurs à 0
    // Ça va me servir dans le calcul du total.
    panier = new Panier(new Fruit(), new Fruit(), new Fruit());  // Seul le panier va être global. On l'initialise au chargement de la page.
}

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

function envoyer(){

    // Validation
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

        //inscririre les données dans la session
        //sessionStorage.setItem("nbPommes", document.getElementById("nbPommes").value);
        // Créer le panier
        //let monPanier = new Panier(nouveauFruit, 0, 0, nouveauFruit.sousTotal);

        // Inscrire le panier dans la session pour y avoir accès sur la deuxième page.
        sessionStorage.setItem("panier", panier);
        return true;
    }
}
