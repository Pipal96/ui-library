import {FC, ReactNode} from "react";
import * as S from './styledSendForm'

type SendFormProps = {
  children: ReactNode;
}

const SendForm: FC<SendFormProps> = ({children}) => {

  function submit(event: any) {
    event.preventDefault()

    for (const eventElement of event.target) {
      console.log(eventElement.value)
    }
  }

  return (
    <S.Form onSubmit={submit}>
      {children}
    </S.Form>
  );
};

export {SendForm};
