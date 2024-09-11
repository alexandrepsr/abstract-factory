import IAircraft from "../Aircraft/IAircraft";
import ITransportFactory from "../factory/ITransportFactory";
import ILandVehicle from "../land/IALandVehicle";

export default class Client {
  private vehicle: ILandVehicle;
  private aircraft: IAircraft;
  constructor(factor: ITransportFactory) {
    this.vehicle = factor.createTransportVehicle();
    this.aircraft = factor.createTransportAircraft();
  }

  startRoute(): void {
    this.vehicle.startRoute();
    this.aircraft.startRoute();
  }
}
