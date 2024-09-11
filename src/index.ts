import Client from "./client/Client";
import ITransportFactory from "./factory/ITransportFactory";
import NineNineTransport from "./factory/NineNineTransport";
import UberTransport from "./factory/UberTransport";

enum company {
  UBER = "UBER",
  NINENINE = "NINENINE",
}

const currentCompany: string = company.NINENINE;
let factory: ITransportFactory;

if (currentCompany == company.UBER) {
  factory = new UberTransport();
} else if (currentCompany == company.NINENINE) {
  factory = new NineNineTransport();
} else {
  throw new Error("Factory not found");
}

const client = new Client(factory);
client.startRoute();
