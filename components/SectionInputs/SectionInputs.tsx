import * as S from './styledSectionInputs'
import {InputText} from "../InputText";

import valid from '/public/input/valid.svg'
import {SendForm} from "../SendForm";

const SectionInputs = () => {
  return (
    <S.Section>
      <S.MainContainer>
        <S.Title>Inputs</S.Title>

        <S.Heading>Input type text</S.Heading>

        <ul>
          <li>
            Есть баг. Если автозаполнить поле, то не видно placeholder
          </li>
        </ul>

        <SendForm>
          <InputText name={'name'}
                     id={'name'}
                     placeholder={'Your name'}
                     images={{
                       valid: valid,
                       invalid: null,
                     }}
          />
          <InputText name={'surname'}
                     id={'surname'}
                     placeholder={'Your name'}
                     images={{
                       valid: valid,
                       invalid: null,
                     }}
          />
          <button>send</button>
        </SendForm>
      </S.MainContainer>
    </S.Section>
  );
};

export {SectionInputs};
