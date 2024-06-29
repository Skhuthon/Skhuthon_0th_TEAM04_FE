import React, { ChangeEvent } from "react";
import * as S from "./SearchInput.styled";

import SearchIcon from "@/assets/svg/icon-search.svg";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput = ({
  value,
  onChangeValue,
  placeholder,
  onClick,
  ...rest
}: Props) => {
  return (
    <S.SearchWrapper>
      <S.SearchInputArea
        {...rest}
        value={value}
        onChange={(e) => onChangeValue(e)}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
        inputWidth="80%"
      />
      <img src={SearchIcon} alt="search-icon" onClick={onClick} />
    </S.SearchWrapper>
  );
};

export default SearchInput;
