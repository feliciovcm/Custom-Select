import { useEffect, useRef, useState } from "react";
import { VehicleSelectView } from "./CustomSelectView";

type Vehicle = {
  id: string | number;
  name: string;
  subtitle?: string;
};

interface VehicleSelectProps {
  options: Vehicle[];
  onChange: (event: Vehicle[] | Vehicle) => void;
  name: string;
  id?: string;
  mobileScreen?: boolean;
  title?: string;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showListItemsSubtitle?: boolean;
  isMulti?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
}

export function VehicleSelect(props: VehicleSelectProps) {
  const {
    options = [],
    onChange,
    name,
    id,
    mobileScreen,
    title = "Opções",
    showTitle,
    showSubtitle,
    showListItemsSubtitle,
    minWidth,
    maxWidth,
    isMulti,
  } = props;

  const [display, setDisplay] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Vehicle[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const subtitle = `Adicione seus ${title.toLowerCase()} ao grupo`;

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
    if (isMulti) handleAddVehicleToChosenList(vehicle);
    else {
      setSelectedOption([vehicle]);
    }
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
    if (onChange) {
      if (isMulti) onChange(selectedOption);
      else onChange(selectedOption[0]);
    }
  }, [selectedOption, onChange, isMulti]);

  const placeholder =
    selectedOption.length > 0
      ? selectedOption.length === 1
        ? "1 item selecionado"
        : `${selectedOption.length} itens selecionados`
      : title;

  return (
    <VehicleSelectView
      title={title}
      showTitle={showTitle}
      subtitle={subtitle}
      ref={wrapperRef}
      mobileScreen={mobileScreen}
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
      showSubtitle={showSubtitle}
      showListItemsSubtitle={showListItemsSubtitle}
      minWidth={minWidth}
      maxWidth={maxWidth}
    />
  );
}
