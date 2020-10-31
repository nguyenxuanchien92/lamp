// import Battery from "lamp/class/battery";
// import FlashLamp from "lamp/class/flash-lamp";


import Battery from "./battery";
import FlashLamp from "./flash-lamp";

function show(){
    let battery = new Battery(10);
    let flashLamp = new FlashLamp(battery);

    console.log(`Battery info: ${flashLamp.battery()}`);
    flashLamp.light();
    console.log("Turn on");
    flashLamp.turnOn();
    flashLamp.light();
    console.log(`Battery info: ${flashLamp.battery()}`);
    console.log("Turn off");
    flashLamp.turnOff();
    flashLamp.light();
}

show();