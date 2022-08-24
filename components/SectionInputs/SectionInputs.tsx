import * as S from './styledSectionInputs'
import {InputText} from "../InputText";
import {SendForm} from "../SendForm";
import {InputEmail} from "../InputEmail";

import valid from '/public/input/valid.svg'
import invalid from '/public/input/invalid.svg'

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
                       invalid: invalid,
                     }}
          />
          <InputEmail name={'email'}
                      id={'email'}
                      placeholder={'E-mail'}
                      images={{
                        valid: valid,
                        invalid: invalid,
                      }}
          />
          <button>send</button>
        </SendForm>
      </S.MainContainer>
    </S.Section>
  );
};

export {SectionInputs};
