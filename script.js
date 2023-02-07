class Fruit{
    constructor(nom, prix, quantite, sousTotal) {
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
    constructor(peches, poires, pommes, total) {
        this.peches = peches;
        this.poires = poires;
        this.pommes = pommes;
    }

    toString(){
        return this.peches + "\n" + this.poires + "\n" + this.pommes;
    }
}

function valider(fruit){
    // Récupérer les variables
    let nbFruit = document.getElementById("nb"+fruit).value;
    let prix = document.getElementById("prix"+fruit).innerText;
    let sousTotal = 0;

    // Valider le nombre de fruits
    if (nbFruit < 0 || nbFruit > 24)
    {
        document.getElementById("erreur"+fruit).innerText = "Doit être entre 0 et 24";
    }
    // Afficher le sous-total
    else {
        document.getElementById("erreur"+fruit).innerText = "";
        sousTotal = +nbFruit * +prix;
        document.getElementById("sousTotal"+fruit).innerText = sousTotal;
    }

    // Créer les objets fruits
    nouveauFruit = new Fruit(fruit, prix, nbFruit, sousTotal);
}

function envoyer(){

    //inscririre les données dans la session
    sessionStorage.setItem("nbPommes", document.getElementById("nbPommes").value);

    // Créer le panier
    let monPanier = new Panier(nouveauFruit, 0, 0, nouveauFruit.sousTotal);
    sessionStorage.setItem("panier", monPanier);
    return true;
}
