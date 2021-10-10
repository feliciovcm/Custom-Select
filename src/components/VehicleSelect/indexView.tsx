import {
  DropDownContainer,
  DropDownHeader,
  DropDownInput,
  DropDownList,
  DropDownListContainer,
  Input,
  ListItem,
  PlateSpan,
  ShrinkPlaceholder,
} from "./styles";
import DropdownIcon from "../../assets/icons/ArrowdownIcon.svg";
import CheckIcon from "../../assets/icons/CheckIcon.svg";
import {
  ChangeEvent,
  Dispatch,
  forwardRef,
  ForwardRefRenderFunction,
  SetStateAction,
} from "react";

type Vehicle = {
  id: string;
  name: string;
};

interface VehicleSelectViewProps {
  mobileScreen?: boolean;
  toggling: () => void;
  selectedOption: Vehicle[];
  id?: string;
  name: string;
  placeholder: string;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  display: boolean;
  options: Vehicle[];
  setVehicleChosen: (vehicle: Vehicle) => void;
}

const VehicleSelectViewBase: ForwardRefRenderFunction<
  HTMLDivElement,
  VehicleSelectViewProps
> = (
  {
    mobileScreen,
    toggling,
    selectedOption,
    id,
    name,
    placeholder,
    setSearch,
    search,
    display,
    options,
    setVehicleChosen,
  },
  ref
) => {
  return (
    <DropDownContainer ref={ref} isLarge={!mobileScreen}>
      <DropDownHeader
        onClick={toggling}
        isLarge={!mobileScreen}
        hasChoices={selectedOption.length > 0}
      >
        {selectedOption.length > 0 && (
          <ShrinkPlaceholder>Veículos</ShrinkPlaceholder>
        )}
        <DropDownInput>
          <Input
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearch(event.target.value);
            }}
            value={search}
            isLarge={!mobileScreen}
            hasChoices={selectedOption.length > 0}
          />
          <img src={DropdownIcon} alt="Dropdown Icon" />
        </DropDownInput>
      </DropDownHeader>
      {display && (
        <DropDownListContainer>
          <DropDownList>
            {options
              .filter(({ id }: Vehicle) => id.indexOf(search.toUpperCase()) > -1)
              .map((option: Vehicle) => {
                return (
                  <ListItem
                    key={option.id}
                    onClick={() => {
                      setVehicleChosen(option);
                    }}
                    tabIndex={0}
                    isChosen={selectedOption.some(
                      (item: Vehicle) => option.id === item.id
                    )}
                  >
                    <div>
                      <PlateSpan>{option.id}</PlateSpan> {option.name}
                    </div>
                    {selectedOption.some(
                      (item: Vehicle) => option.id === item.id
                    ) && <img src={CheckIcon} alt="Check Icon" />}
                  </ListItem>
                );
              })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export const VehicleSelectView = forwardRef(VehicleSelectViewBase);
