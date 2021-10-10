import { createServer, Model } from "miragejs";
export function makeServer() {
  const server = createServer({
    models: {
      vehicle: Model,
    },

    seeds(server) {
      server.db.loadData({
        vehicles: [
          {
            id: "FAO3145",
            name: "M.Benz - Atego(2015)",
          },
          {
            id: "FAP4521",
            name: "Chevrolet - Onix(2017)",
          },
          {
            id: "FAU6468",
            name: "Chevrolet - Corsa(2012)",
          },
          {
            id: "FAI5134",
            name: "Chevrolet - Prisma(2018)",
          },
          {
            id: "FAC1456",
            name: "Volkswagen - Voyage(2018)",
          },
          {
            id: "CAC3785",
            name: "Fiat - Uno(2015)",
          },
          {
            id: "SIC8732",
            name: "Fiat - Bravo(2016)",
          },
          {
            id: "SIA9832",
            name: "Citroen - C3(2013)",
          },
          {
            id: "CAU7843",
            name: "Hyundai - i30(2011)",
          },
          {
            id: "CRE8967",
            name: "Hyundai - Tucson(2015)",
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";
      this.get("/vehicles", () => {
        return this.schema.all("vehicle");
      });
    },
  });

  return server;
}
