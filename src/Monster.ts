import { SimpleFighter } from "./Fighter";

export default class Monster implements SimpleFighter{
    private _lifePoints: number;
    private _strength: number;

    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }

    get lifePoints(): number {
        return this._lifePoints;
    }

    get strength(): number {
        return this._strength;
    }

    attack(enemy: SimpleFighter): void {
        const damage = this._strength;
        enemy.receiveDamage(damage)
    }

    receiveDamage(attackPoints: number): number {
        if (this._lifePoints > 0) {
            this._lifePoints -= attackPoints; // Subtrai os pontos de vida com base no ataque recebido
            if (this._lifePoints <= 0) {
                this._lifePoints = 0; // Define como 0 se os pontos de vida forem negativos
            }
        }
        return this._lifePoints; // Retorna o novo valor de pontos de vida
    }
}