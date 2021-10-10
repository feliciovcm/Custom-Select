import { useEffect, useRef, useState } from "react";
import { VehicleSelectView } from "./indexView";

type Vehicle = {
  id: string;
  name: string;
};

interface VehicleSelectProps {
  options: Vehicle[];
  onChange: (event: Vehicle[]) => void;
  name: string;
  id?: string;
  isLarge?: boolean;
}

export function VehicleSelect({
  options = [],
  onChange,
  name,
  id,
  isLarge,
}: VehicleSelectProps) {
  const [display, setDisplay] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Vehicle[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function toggling() {
    setDisplay(!display);
  }

  function checkVehicleIndex(newArr: Vehicle[], vehicle: Vehicle) {
    const indexOfVehicle = newArr.findIndex(
      (option: Vehicle) => option.id === vehicle.id
    );
    return indexOfVehicle;
  }

  function handleAddVehicleToChosenList(vehicle: Vehicle) {
    const newArr = [...selectedOption];
    const vehicleAlreadyChosen = checkVehicleIndex(newArr, vehicle);
    if (vehicleAlreadyChosen > -1) {
      newArr.splice(vehicleAlreadyChosen, 1);
      setSelectedOption(newArr);
      return;
    }
    newArr.push(vehicle);
    setSelectedOption(newArr);
  }

  function setVehicleChosen(vehicle: Vehicle) {
    setSearch("");
    handleAddVehicleToChosenList(vehicle);
    setDisplay(false);
  }

  function handleCLickOutside(event: any) {
    const { current: wrap } = wrapperRef;

    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCLickOutside);

    return () => {
      document.removeEventListener("mousedown", handleCLickOutside);
    };
  }, []);

  useEffect(() => {
    if (onChange) onChange(selectedOption);
  }, [selectedOption, onChange]);

  const placeholder =
    selectedOption.length > 0
      ? `${selectedOption.length} itens selecionados`
      : "Veículos";

  return (
    <VehicleSelectView
      ref={wrapperRef}
      isLarge={isLarge}
      toggling={toggling}
      selectedOption={selectedOption}
      id={id}
      name={name}
      placeholder={placeholder}
      setSearch={setSearch}
      search={search}
      display={display}
      options={options}
      setVehicleChosen={setVehicleChosen}
    />
  );
}
