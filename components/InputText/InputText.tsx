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
  const [errorMessage, setErrorMessage] = useState('')

  function handlerInput(event: any) {
    const str = event.target.value

    setErrorMessage(event.target.validationMessage)

    setInputVal(str)


    /*For regexp*/
    // if (str && isRegExp) {
    //   const reg = new RegExp(regexp)
    //   str.match(reg)
    // }
    //
    // if (str.length >= minLength && str.length <= maxLength) {
    //   console.log('valid length')
    // } else {
    //   console.log('invalid length')
    // }
  }

  function currentValidClass() {
    if (errorMessage.length) {
      return 'is-invalid'
    } else if (!errorMessage.length && inputVal.length) {
      return 'is-valid'
    }
    return ''
  }

  return (
    <>
      <S.InputWrap>
        <S.Input type='text'
                 inputMode={'text'}
                 name={name} id={id}
                 className={currentValidClass()}
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
