"use strict";
const typeRelations = {
    Fire: { strengths: ['Grass'], weaknesses: ['Water'] },
    Water: { strengths: ['Fire'], weaknesses: ['Grass'] },
    Grass: { strengths: ['Water'], weaknesses: ['Fire'] },
};
class Pokemon {
    nom;
    hp;
    atk;
    type;
    constructor(nom, hp, atk, type) {
        this.nom = nom;
        this.hp = hp;
        this.atk = atk;
        this.type = type;
    }
    isDead() {
        return this.hp <= 0;
    }
    attack(pokemon) {
        const typeRelation = typeRelations[this.type];
        let damageMultiplier = 1.0;
        if (typeRelation) {
            if (typeRelation.strengths.includes(pokemon.type)) {
                damageMultiplier = 2.0;
            }
            else if (typeRelation.weaknesses.includes(pokemon.type)) {
                damageMultiplier = 0.5;
            }
        }
        const damage = this.atk * damageMultiplier;
        pokemon.hp -= damage;
    }
}
class PokemonFeu extends Pokemon {
    constructor(nom, hp, atk) {
        super(nom, hp, atk, 'Fire');
    }
}
class PokemonEau extends Pokemon {
    constructor(nom, hp, atk) {
        super(nom, hp, atk, 'Water');
    }
}
class PokemonGrass extends Pokemon {
    constructor(nom, hp, atk) {
        super(nom, hp, atk, 'Grass');
    }
}
class PokemonFactory {
    static createPokemon(type, nom, hp, atk) {
        switch (type) {
            case 'Fire':
                return new PokemonFeu(nom, hp, atk);
            case 'Water':
                return new PokemonEau(nom, hp, atk);
            case 'Grass':
                return new PokemonGrass(nom, hp, atk);
            default:
                throw new Error('Type de Pokemon inconnu');
        }
    }
}
class PokemonMain {
    static main() {
        const nom1 = prompt('Entrez le nom du premier Pokémon:') || '';
        const type1 = prompt('Entrez le type du premier Pokémon (Fire, Water, ou Grass):') ||
            '';
        const atk1 = parseInt(prompt("Entrez les points d'attaque du premier Pokémon:") || '0');
        const nom2 = prompt('Entrez le nom du deuxième Pokémon:') || '';
        const type2 = prompt('Entrez le type du deuxième Pokémon (Fire, Water, ou Grass):') ||
            '';
        const atk2 = parseInt(prompt("Entrez les points d'attaque du deuxième Pokémon:") || '0');
        const pokemon1 = PokemonFactory.createPokemon(type1, nom1, 100, atk1);
        const pokemon2 = PokemonFactory.createPokemon(type2, nom2 || '', 100, atk2);
        while (!pokemon1.isDead() && !pokemon2.isDead()) {
            console.log(`${pokemon1.nom} attaque ${pokemon2.nom}`);
            pokemon1.attack(pokemon2);
            console.log(`${pokemon2.nom} attaque ${pokemon1.nom}`);
            pokemon2.attack(pokemon1);
        }
        if (pokemon1.isDead()) {
            console.log(`${pokemon1.nom} est KO. ${pokemon2.nom} gagne !`);
        }
        else {
            console.log(`${pokemon2.nom} est KO. ${pokemon1.nom} gagne !`);
        }
    }
}
PokemonMain.main();
var x = 4;
x = 5;
//# sourceMappingURL=Pokemon.js.map