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
            name: "FAO3145",
            subtitle: "M.Benz - Atego(2015)",
            id: 1,
          },
          {
            name: "FAP4521",
            subtitle: "Chevrolet - Onix(2017)",
            id: 2,
          },
          {
            name: "FAU6468",
            subtitle: "Chevrolet - Corsa(2012)",
            id: 3,
          },
          {
            name: "FAI5134",
            subtitle: "Chevrolet - Prisma(2018)",
            id: 4,
          },
          {
            name: "FAC1456",
            subtitle: "Volkswagen - Voyage(2018)",
            id: 5,
          },
          {
            name: "CAC3785",
            subtitle: "Fiat - Uno(2015)",
            id: 6,
          },
          {
            name: "SIC8732",
            subtitle: "Fiat - Bravo(2016)",
            id: 7,
          },
          {
            name: "SIA9832",
            subtitle: "Citroen - C3(2013)",
            id: 8,
          },
          {
            name: "CAU7843",
            subtitle: "Hyundai - i30(2011)",
            id: 9,
          },
          {
            name: "CRE8967",
            subtitle: "Hyundai - Tucson(2015)",
            id: 10,
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
