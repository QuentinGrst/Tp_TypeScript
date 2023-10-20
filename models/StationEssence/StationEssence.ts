class StationEssence {
  static faireLePlein(vehicule: Vehicule): void {
    console.log(
      `Je fais le plein de ${vehicule.getMarque} avec ${vehicule.getMoteur()}`
    );
  }
}
