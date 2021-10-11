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
  SelectContainer,
  Title,
  Subtitle,
  TitleContainer,
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
  id: string | number;
  name: string;
  subtitle?: string;
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
  title: string;
  subtitle?: string;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showListItemsSubtitle?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
}

const VehicleSelectViewBase: ForwardRefRenderFunction<
  HTMLDivElement,
  VehicleSelectViewProps
> = (props, ref) => {
  const {
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
    title,
    subtitle,
    showTitle,
    showSubtitle,
    showListItemsSubtitle,
    minWidth = "22.6875rem",
    maxWidth = "34.375rem",
  } = props;

  function checkType(value: string | number) {
    const type = typeof value === "number";
    return type;
  }
  return (
    <SelectContainer>
      {showTitle && (
        <TitleContainer>
          <Title>{title}</Title>
          {showSubtitle && <Subtitle>{subtitle}</Subtitle>}
        </TitleContainer>
      )}
      <DropDownContainer
        ref={ref}
        isLarge={!mobileScreen}
        minWidth={checkType(minWidth) ? `${minWidth}px` : minWidth}
        maxWidth={checkType(maxWidth) ? `${maxWidth}px` : maxWidth}
      >
        <DropDownHeader
          onClick={toggling}
          isLarge={!mobileScreen}
          hasChoices={selectedOption.length > 0}
        >
          {selectedOption.length > 0 && (
            <ShrinkPlaceholder>{title}</ShrinkPlaceholder>
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
          <DropDownListContainer
            minWidth={checkType(minWidth) ? `${minWidth}px` : minWidth}
            maxWidth={checkType(maxWidth) ? `${maxWidth}px` : maxWidth}
          >
            <DropDownList>
              {options
                .filter(
                  ({ name }: Vehicle) => name.indexOf(search.toUpperCase()) > -1
                )
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
                        <PlateSpan>{option.name}</PlateSpan>{" "}
                        {showListItemsSubtitle && option.subtitle}
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
    </SelectContainer>
  );
};

export const VehicleSelectView = forwardRef(VehicleSelectViewBase);
