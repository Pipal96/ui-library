import {FC} from "react";
import * as S from './styledSectionInputs'
import {InputText} from "../InputText";
import {SendForm} from "../SendForm";
import {InputEmail} from "../InputEmail";

import valid from '/public/input/valid.svg'
import invalid from '/public/input/invalid.svg'
import {InputPhone} from "../InputPhone";

const SectionInputs: FC = () => {
  return (
    <S.SectionMain>
      <S.MainContainer>
        <S.Title>Inputs</S.Title>

        <S.Heading>Input type text</S.Heading>

        <ul>
          <li>
            Есть баг. Если автозаполнить поле, то не видно placeholder
            <br/>
            Решение - отключить автозаполнение
          </li>
          <li>
            Есть баг. чем больше текста вводишь, тем дальше он становится от левого края
            <br/>
            Решение - отключить автозаполнение
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
          <InputPhone name={'phone'}
                      id={'phone'}
                      placeholder={'Your phone number'}
                      images={{
                        valid: valid,
                        invalid: invalid,
                      }}
          />
          <button>send</button>
        </SendForm>
      </S.MainContainer>
    </S.SectionMain>
  );
};

export {SectionInputs};
