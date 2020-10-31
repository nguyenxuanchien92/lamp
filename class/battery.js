export default class Battery {
    constructor(energy) {
        this._energy = energy;
    }

    decreaseEnergy() {
        if (this._energy > 0)
            this._energy--;
    }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }
}