import { useEffect, useRef, useState } from "react";
import { CustomSelectView } from "./CustomSelectView";

export type Option = {
  id: string | number;
  name: string;
  subtitle?: string;
};

interface CustomSelectProps {
  options: Option[];
  onChange: (event: Option[] | Option) => void;
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
  maxMenuItemsDisplay?: number;
}

export function CustomSelect(props: CustomSelectProps) {
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
    maxMenuItemsDisplay = 8,
  } = props;

  const [display, setDisplay] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const subtitle = `Adicione seus ${title.toLowerCase()} ao grupo`;

  const placeholder =
    selectedOption.length > 0
      ? selectedOption.length === 1
        ? "1 item selecionado"
        : `${selectedOption.length} itens selecionados`
      : title;

  function checkType(value: string | number): boolean {
    const type = typeof value === "number";
    return type;
  }

  const maxMenuHeight =
    maxMenuItemsDisplay === 0 ? "" : `${maxMenuItemsDisplay * 40 + 2}px`;

  function toggling() {
    setDisplay(!display);
  }

  function checkOptionIndex(newArr: Option[], option: Option) {
    const indexOfOption = newArr.findIndex(
      (item: Option) => item.id === option.id
    );
    return indexOfOption;
  }

  function handleAddOptionToChosenList(option: Option) {
    const newArr = [...selectedOption];
    const optionAlreadyChosen = checkOptionIndex(newArr, option);
    if (optionAlreadyChosen > -1) {
      newArr.splice(optionAlreadyChosen, 1);
      setSelectedOption(newArr);
      return;
    }
    newArr.push(option);
    setSelectedOption(newArr);
  }

  function setOptionChosen(option: Option) {
    setSearch("");
    if (isMulti) handleAddOptionToChosenList(option);
    else {
      setSelectedOption([option]);
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

  return (
    <CustomSelectView
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
      setOptionChosen={setOptionChosen}
      showSubtitle={showSubtitle}
      showListItemsSubtitle={showListItemsSubtitle}
      minWidth={minWidth}
      maxWidth={maxWidth}
      checkType={checkType}
      maxMenuHeight={maxMenuHeight}
      showScroll={options.length > maxMenuItemsDisplay}
    />
  );
}
