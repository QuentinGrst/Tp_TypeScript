class Vehicule {
  private marque: string;
  private color: string;
  private prix: number;
  private moteur: Moteur;

  constructor(marque: string, color: string, prix: number, moteur: Moteur) {
    this.marque = marque;
    this.color = color;
    this.prix = prix;
    this.moteur = moteur;
  }

  static faireLePlein(vehicule: Vehicule) {
    StationEssence.faireLePlein(vehicule);
  }

  getMarque(): string {
    return this.marque;
  }

  setMarque(marque: string) {
    this.marque = marque;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getPrix(): number {
    return this.prix;
  }

  setPrix(prix: number) {
    this.prix = prix;
  }

  getMoteur(): Moteur {
    return this.moteur;
  }

  setMoteur(moteur: Moteur) {
    this.moteur = moteur;
  }
}
