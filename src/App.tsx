import { VehicleSelect } from "./components/VehicleSelect";
import { makeServer } from "./services/mirage";
import { api } from "./services/api";
import { useEffect, useState } from "react";

type Vehicle = {
  id: string;
  name: string;
};

type Res = {
  vehicles: Vehicle[];
};

function App() {
  const [options, setOptions] = useState<Vehicle[]>([]);

  makeServer();
  useEffect(() => {
    const response = api.get("/vehicles").then((res) => res.data);
    response.then((res: Res) => setOptions(res.vehicles));
  }, []);

  function handleChange(event: Vehicle[]) {
    console.log(event);
  }

  return (
    <div style={{ margin: "5rem" }}>
      <VehicleSelect
        options={options}
        onChange={handleChange}
        name="select"
        id="select"
        title="Veículos"
        subtitle="Adicione seus veículos ao grupo"
        showTitle
        showId
      />
    </div>
  );
}

export default App;
