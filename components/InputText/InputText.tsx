import * as S from './styledInputText'
import {FC, useState} from "react";

type InputTextProps = {
  name: string;
  id: string;
  placeholder: string;
  isRegExp?: boolean;
  regexp?: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
} & S.InputProps

const InputText: FC<InputTextProps> = ({
                                         name,
                                         id,
                                         placeholder,
                                         isRegExp = false,
                                         isRequired = true,
                                         regexp = '^[A-Za-z]+$',
                                         minLength = 2,
                                         maxLength = 22,
                                         images,
                                       }) => {

  const [inputVal, setInputVal] = useState('')
  const [isValid, setValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handlerInput(event: any) {
    const str = event.target.value

    setInputVal(str)

    if (str && isRegExp) {
      const reg = new RegExp(regexp)
      str.match(reg)
    }

    if (str.length >= minLength && str.length <= maxLength) {
      setValid(true)
      setErrorMessage(event.target.validationMessage)
      console.log('valid length')
    } else {
      setValid(false)
      setErrorMessage(event.target.validationMessage)
      console.log('invalid length')
    }
  }

  return (
    <>
      <S.InputWrap>
        <S.Input type='text'
                 inputMode={'text'}
                 name={name} id={id}
                 className={isValid ? 'is-valid' : 'is-invalid'}
                 placeholder={placeholder}
                 onInput={handlerInput}
                 required={isRequired}
                 minLength={minLength}
                 maxLength={maxLength}
                 value={inputVal}
                 images={images}
        />
        <S.Label htmlFor={id}>{placeholder}</S.Label>
      </S.InputWrap>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
};

export {InputText};
