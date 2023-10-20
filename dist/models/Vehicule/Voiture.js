"use strict";
class Voiture extends Vehicule {
    constructor(marque, couleur, prix, moteur, nbPortes) {
        super(marque, couleur, prix, moteur);
        this.nbPortes = nbPortes;
    }
    nbPortes;
    getNbPortes() {
        return this.nbPortes;
    }
    setNbPortes(nbPortes) {
        this.nbPortes = nbPortes;
    }
}
//# sourceMappingURL=Voiture.js.map