import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { makeServer } from "./services/mirage";
import { api } from "./services/api";
import { useEffect, useState } from "react";

type Vehicle = {
  id: string | number;
  name: string;
  subtitle?: string;
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

  function handleChange(event: Vehicle[] | Vehicle) {
    console.log(event);
  }

  return (
    <div style={{ margin: "5rem" }}>
      <CustomSelect
        options={options}
        onChange={handleChange}
        name="select"
        id="select"
        showTitle
        title="veículos"
        showSubtitle
        showListItemsSubtitle
      />
    </div>
  );
}

export default App;
