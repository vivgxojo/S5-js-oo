
class Panier{
    constructor(peches, poires, pommes, total=0) {
        this.peches = peches;
        this.poires = poires;
        this.pommes = pommes;
        this.total = total;
    }

    toString(){
        return this.peches + "<br>" + this.poires + "<br>" + this.pommes + "<br>Total : " + this.total + "$";
    }
}