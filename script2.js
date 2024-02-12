function afficher(){

    // Recréer le panier pour afficher la facture
    // Exemple de données dans l'URL : nbPeches=2&nbPoires=3&nbPommes=4
    const params = new URLSearchParams(document.location.search);
    const nbPeches = params.get("nbPeches");
    const nbPoires = params.get("nbPoires");
    const nbPommes = params.get("nbPommes");

    const Peches = new Fruit("Peches", 10, nbPeches, 10 * +nbPeches);
    const Poires = new Fruit("Poires", 12, nbPoires, 12 * +nbPoires);
    const Pommes = new Fruit("Pommes", 11, nbPommes, 11 * +nbPommes);

    const panier = new Panier(Peches, Poires, Pommes);
    panier.total = +panier.peches.sousTotal + +panier.poires.sousTotal + +panier.pommes.sousTotal;

    document.getElementById("panier").innerHTML = panier;


    /*  // autres versions...
        // récupérer les données de l'URL
        let data = location.search.substring(1); //location.search = données de l'URL, on enlève le ? avec substring(1)
        document.write(data);
        let tabDatas = data.split("&");
        let nbPeches = tabDatas[0].split("=")[1];
        document.write(nbPeches)

        // récupérer les données de la session
        let nbPommes = sessionStorage.getItem("nbPommes");
        document.write(nbPommes);

        document.write("<br>");

        let panier = sessionStorage.getItem("panier");
        //document.write(panier);
        document.getElementById("panier").innerHTML = panier;
    */
}