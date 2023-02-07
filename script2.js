function afficher(){

    // récupérer les données de l'URL
    let data = location.search.substring(1); //location.search = données de l'URL, on enlève le ? avec substring(1)
    document.write(data);
    let tabDatas = data.split('&');
    let nbPeches = tabDatas[0].split("=")[1];
    document.write(nbPeches)

    // récupérer les données de la session
    let nbPommes = sessionStorage.getItem("nbPommes");
    document.write(nbPommes);

    document.writeln();

    let panier = sessionStorage.getItem("panier");
    document.writeln(panier);


}