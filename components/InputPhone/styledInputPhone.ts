import styled from 'styled-components'
import {IMaskInput} from "react-imask";

export type InputProps = {
  images?: {
    valid: any;
    invalid: any;
  }
}

export const Input = styled(IMaskInput)<InputProps>`
  display: block;

  font-size: 16px;
  line-height: 1.5;
  width: 100%;

  position: relative;
  z-index: 1;

  background-color: transparent;
  border: 1px solid #F0EDEA;
  border-radius: 8px;

  padding: 18px 12px;

  &.is-valid {
    ${({images}) => images?.valid && `background-image: url('${images.valid.src}');`};
  }

  &.is-invalid {
    ${({images}) => images?.invalid && `background-image: url('${images.invalid.src}');`};
  }

  ${({images}) => images && `background-repeat: no-repeat;`};
  ${({images}) => images && `background-position: right 12px center;`};

  &::placeholder {
    color: transparent;
  }

  &:focus, &:not(:placeholder-shown) {
    ~ label {
      transform: matrix(.75, 0, 0, .75, -12, -24);
    }
  }
`;
