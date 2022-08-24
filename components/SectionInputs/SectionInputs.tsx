import * as S from './styledSectionInputs'
import {InputText} from "../InputText";

import valid from '/public/input/valid.svg'

const SectionInputs = () => {
  return (
    <S.Section>
      <S.MainContainer>
        <S.Title>Inputs</S.Title>

        <S.Heading>Input type text</S.Heading>

        <InputText name={'name'}
                   id={'name'}
                   placeholder={'Your name'}
                   images={{
                     valid: valid,
                     invalid: null,
                   }}
        />
      </S.MainContainer>
    </S.Section>
  );
};

export {SectionInputs};
