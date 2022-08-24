import * as S from './styledContainer'
import {FC, ReactNode} from "react";
import {StyledProps} from "styled-components";
import {Style} from "util";

type PropsContainer = {
  children: ReactNode,
  className?: StyledProps<Style>
}

const Container: FC<PropsContainer> = ({children, className}) => {
  return (
    <S.Container className={className}>
      {children}
    </S.Container>
  );
};

export {Container};
