import styled from "styled-components";

interface StyledProps {
  isLarge?: boolean;
  hasChoices?: boolean;
  isChosen?: boolean;
}

const SelectContainer = styled.div`
  text-align: left !important;
  width: 100%;
  font: 400 1rem "Inter", sans-serif;
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 0.875rem;
  color: #33303e;
  line-height: 1.375rem;
`;

const Subtitle = styled.p`
  margin-top: 0.25rem;
  color: #898989;
  font-size: 0.75rem;
`;

const DropDownContainer = styled.div`
  width: 100%;
  max-width: 34.375rem;
  min-width: 22.6875rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: ${({ isLarge }: StyledProps) => (isLarge ? "2.625rem" : "2.375rem")};
  position: relative;
`;

const DropDownHeader = styled.div`
  padding: ${({ isLarge, hasChoices }: StyledProps) =>
    isLarge && hasChoices
      ? "0.5rem 0.5625rem 0.5625rem"
      : isLarge && !hasChoices
      ? "0.8175rem 0.5625rem"
      : !isLarge && hasChoices
      ? "0.375rem 0.5625rem 0.4375rem"
      : "0.6875rem 0.5625rem"};
  font-weight: 500;
  font-size: 1.2rem;
  color: #3faffa;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
`;

const DropDownInput = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 40px;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  max-width: 34.375rem;
  min-width: 22.6875rem;
  top: 48px;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 0.3125rem;
  box-sizing: border-box;
  color: #898989;
  font-weight: 500;
  text-align: left;
`;

const ListItem = styled.li`
  cursor: default;
  list-style: none;
  font-size: 0.875rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.9375rem;
  &:first-child {
    border-top-left-radius: 0.3125rem;
    border-top-right-radius: 0.3125rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem;
  }
  &:hover {
    background-color: #f1f3f7;
  }
  background-color: ${({ isChosen }: StyledProps) =>
    isChosen ? "#F1F3F7" : "white"};
`;

const PlateSpan = styled.span`
  margin-right: 1rem;
  color: #434343;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-size: 0.875rem;
  text-transform: capitalize;
  outline: none;
  padding: 0;
  cursor: default;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ hasChoices }: StyledProps) =>
      hasChoices ? "#000000" : "#898989"};
    opacity: ${({ hasChoices }: StyledProps) => (hasChoices ? 0.65 : 1)};
  }
  :-ms-input-placeholder {
    color: ${({ hasChoices }: StyledProps) => (hasChoices ? 0.65 : 1)};
    opacity: 0.65;
  }
`;

const ShrinkPlaceholder = styled.p`
  margin: 0;
  font-size: 0.5rem;
  color: #000000;
  opacity: 0.65;
`;

export {
  DropDownContainer,
  PlateSpan,
  Input,
  ListItem,
  DropDownList,
  DropDownListContainer,
  DropDownHeader,
  DropDownInput,
  ShrinkPlaceholder,
  SelectContainer,
  Title,
  Subtitle,
  TitleContainer,
};
