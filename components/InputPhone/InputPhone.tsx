import * as S from './styledInputPhone'
import {FC, useRef} from "react";

type InputPhoneProps = {
  name: string;
  id: string;
  placeholder: string;
  isRegExp?: boolean;
  regexp?: string;
  isRequired?: boolean;
} & S.InputProps

const InputPhone: FC<InputPhoneProps> = ({
                                           name,
                                           id,
                                           placeholder,
                                           isRequired = true,
                                           images,
                                         }) => {
  const ref = useRef(null);
  return (
    <>
      <S.Input
        name={name}
        id={id}
        mask={'+{7} 000 000 00 00'}
        unmask={true}
        ref={ref}
        required={isRequired}
        onAccept={
          (value, mask) => console.log(value)
        }
        placeholder={placeholder}
      />
    </>

  );
};

export {InputPhone};
