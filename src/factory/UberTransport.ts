import Airplane from "../Aircraft/Airplane";
import IAircraft from "../Aircraft/IAircraft";
import Car from "../land/Car";
import ILandVehicle from "../land/IALandVehicle";
import ITransportFactory from "./ITransportFactory";

export default class UberTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Car();
  }
  createTransportAircraft(): IAircraft {
    return new Airplane();
  }
}
