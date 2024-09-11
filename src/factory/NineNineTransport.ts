import Helicopter from "../Aircraft/Helicopter";
import IAircraft from "../Aircraft/IAircraft";
import ILandVehicle from "../land/IALandVehicle";
import Motorcicle from "../land/Motorcicle";
import ITransportFactory from "./ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Motorcicle();
  }
  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }
}
