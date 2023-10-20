class Voiture extends Vehicule {
  constructor(
    marque: string,
    couleur: string,
    prix: number,
    moteur: Moteur,
    nbPortes: number
  ) {
    super(marque, couleur, prix, moteur);
    this.nbPortes = nbPortes;
  }

  private nbPortes: number;

  getNbPortes(): number {
    return this.nbPortes;
  }

  setNbPortes(nbPortes: number) {
    this.nbPortes = nbPortes;
  }
}
