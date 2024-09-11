import IAircraft from "./IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Start flight");
  }
  getCargo(): void {
    console.log("Getting packages");
  }
  checkWind(): void {
    console.log("Wind at 20 km/h, west");
  }
}
