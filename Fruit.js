class Fruit{
    constructor(nom="", prix=0, quantite=0) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.sousTotal = +prix * +quantite;
    }

    toString(){
        return this.quantite + " " + this.nom + " à " + this.prix + "$ : " + this.sousTotal + "$";
    }
}