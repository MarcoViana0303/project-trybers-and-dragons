import Archetype from "./Archetypes";
import Energy from "./Energy";
import Fighter from "./Fighter";
import Race from "./Races";

export default class Character implements Fighter {
    private _race: Race;
    private _archetype: Archetype;
    private _maxLifePoints: number;
    private _lifePoints: number;
    private _strength: number;
    private _defense: number;
    private _dexterity: number;
    private _energy: Energy;

    constructor(race: Race, archetype: Archetype, maxLifePoints: number, lifePoints: number, strength: number, defense: number, dexterity: number, energy: Energy) {
        this._race = race;
        this._archetype = archetype;
        this._maxLifePoints = maxLifePoints;
        this._lifePoints = lifePoints;
        this._strength = strength;
        this._defense = defense;
        this._dexterity = dexterity;
        this._energy = energy;
    }
    
}