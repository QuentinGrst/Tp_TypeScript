"use strict";
class Vehicule {
    marque;
    color;
    prix;
    moteur;
    constructor(marque, color, prix, moteur) {
        this.marque = marque;
        this.color = color;
        this.prix = prix;
        this.moteur = moteur;
    }
    static faireLePlein(vehicule) {
        StationEssence.faireLePlein(vehicule);
    }
    getMarque() {
        return this.marque;
    }
    setMarque(marque) {
        this.marque = marque;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getPrix() {
        return this.prix;
    }
    setPrix(prix) {
        this.prix = prix;
    }
    getMoteur() {
        return this.moteur;
    }
    setMoteur(moteur) {
        this.moteur = moteur;
    }
}
//# sourceMappingURL=Vehicule.js.map