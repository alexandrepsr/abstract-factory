import IAircraft from "../Aircraft/IAircraft";
import ILandVehicle from "../land/IALandVehicle";

export default interface ITransportFactory {
  createTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraft;
}
