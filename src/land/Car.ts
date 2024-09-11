import ILandVehicle from "./IALandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Start route");
  }
  getCargo(): void {
    console.log("Getting package/passenger");
  }
}
