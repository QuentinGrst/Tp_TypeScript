class Moteur {
  private vitesse: number;
  private kilometrage: number;

  constructor(vitesse: number, kilometrage: number) {
    this.vitesse = vitesse;
    this.kilometrage = kilometrage;
  }

  getVitesse(): number {
    return this.vitesse;
  }

  setVitesse(vitesse: number) {
    this.vitesse = vitesse;
  }

  getKilometrage(): number {
    return this.kilometrage;
  }

  setKilometrage(kilometrage: number) {
    this.kilometrage = kilometrage;
  }
}
