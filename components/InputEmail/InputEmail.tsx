import * as S from './styledInputEmail'
import {FC, useState} from "react";

type InputEmailProps = {
  name: string;
  id: string;
  placeholder: string;
  isRegExp?: boolean;
  regexp?: string;
  isRequired?: boolean;
} & S.InputProps

const InputEmail: FC<InputEmailProps> = ({
                                           name,
                                           id,
                                           placeholder,
                                           isRegExp = false,
                                           isRequired = true,
                                           regexp = '^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i',
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
        <S.Input type='email'
                 inputMode={'email'}
                 name={name} id={id}
                 className={currentValidClass()}
                 placeholder={placeholder}
                 onInput={handlerInput}
                 required={isRequired}
                 value={inputVal}
                 images={images}
        />
        <S.Label htmlFor={id}>{placeholder}</S.Label>
      </S.InputWrap>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  )
};

export {InputEmail};
