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

type Option = {
  id: string | number;
  name: string;
  subtitle?: string;
};

interface CustomSelectViewProps {
  mobileScreen?: boolean;
  toggling: () => void;
  selectedOption: Option[];
  id?: string;
  name: string;
  placeholder: string;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  display: boolean;
  options: Option[];
  setOptionChosen: (option: Option) => void;
  title: string;
  subtitle?: string;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showListItemsSubtitle?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
  checkType: (value: string | number) => boolean;
  maxMenuHeight?: string;
  showScroll: boolean;
}

const CustomSelectViewBase: ForwardRefRenderFunction<
  HTMLDivElement,
  CustomSelectViewProps
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
    setOptionChosen,
    title,
    subtitle,
    showTitle,
    showSubtitle,
    showListItemsSubtitle,
    minWidth = "22.6875rem",
    maxWidth = "34.375rem",
    checkType,
    maxMenuHeight,
    showScroll,
  } = props;

 
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
        $isLarge={!mobileScreen}
        $minWidth={checkType(minWidth) ? `${minWidth}px` : minWidth}
        $maxWidth={checkType(maxWidth) ? `${maxWidth}px` : maxWidth}
      >
        <DropDownHeader
          onClick={toggling}
          $isLarge={!mobileScreen}
          $hasChoices={selectedOption.length > 0}
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
              $isLarge={!mobileScreen}
              $hasChoices={selectedOption.length > 0}
            />
            <img src={DropdownIcon} alt="Dropdown Icon" />
          </DropDownInput>
        </DropDownHeader>
        {display && (
          <DropDownListContainer
            $minWidth={checkType(minWidth) ? `${minWidth}px` : minWidth}
            $maxWidth={checkType(maxWidth) ? `${maxWidth}px` : maxWidth}
          >
            <DropDownList $maxMenuHeight={maxMenuHeight} $showScroll={showScroll}>
              {options
                .filter(
                  ({ name }: Option) => name.indexOf(search.toUpperCase()) > -1
                )
                .map((option: Option) => {
                  return (
                    <ListItem
                      key={option.id}
                      onClick={() => {
                        setOptionChosen(option);
                      }}
                      tabIndex={0}
                      $isChosen={selectedOption.some(
                        (item: Option) => option.id === item.id
                      )}
                    >
                      <div>
                        <PlateSpan>{option.name}</PlateSpan>{" "}
                        {showListItemsSubtitle && option.subtitle}
                      </div>
                      {selectedOption.some(
                        (item: Option) => option.id === item.id
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

export const CustomSelectView = forwardRef(CustomSelectViewBase);
