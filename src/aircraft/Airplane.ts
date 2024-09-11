import IAircraft from "./IAircraft";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Start flight");
  }
  getCargo(): void {
    console.log("Getting packages");
  }
  checkWind(): void {
    console.log("Wind ok");
  }
}
