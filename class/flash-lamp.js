export default class FlashLamp {
    constructor(battery) {
        this._status = true;
        this._battery = battery;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get battery() {
        return this._battery.energy();
    }

    set battery(value) {
        this._battery = value;
    }

    light() {
        if (this._status) {
            console.log("Lighting");
        } else {
            console.log("Not lighting");
        }
    }

    turnOn() {
        this._status = true;
    }

    turnOff() {
        this._status = false;
    }
}