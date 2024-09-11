import ILandVehicle from "./IALandVehicle";

export default class Motorcicle implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Start delivery");
  }
  getCargo(): void {
    console.log("Getting package");
  }
}
