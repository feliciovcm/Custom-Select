import { CustomSelect, Option } from "./components/CustomSelect/CustomSelect";
import { makeServer } from "./services/mirage";
import { api } from "./services/api";
import { useEffect, useState } from "react";


type Res = {
  vehicles: Option[];
};

function App() {
  const [options, setOptions] = useState<Option[]>([]);

  makeServer();
  useEffect(() => {
    const response = api.get("/vehicles").then((res) => res.data);
    response.then((res: Res) => setOptions(res.vehicles));
  }, []);

  function handleChange(event: Option[] | Option) {
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
        isMulti
        title="veículos"
        showSubtitle
        showListItemsSubtitle
      />
    </div>
  );
}

export default App;
