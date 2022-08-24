import styled from 'styled-components'

export const InputWrap = styled.div`
  position: relative;
  background-color: beige;
  overflow: hidden;
  border-radius: 8px;
`;

export type InputProps = {
  images?: {
    valid: any;
    invalid: any;
  }
}

export const Input = styled.input<InputProps>`
  display: block;

  font-size: 16px;
  line-height: 1.5;
  width: 100%;

  position: relative;
  z-index: 1;

  background-color: transparent;
  border: 1px solid #F0EDEA;
  border-radius: 8px;

  padding: 28px 18px 6px;

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
export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: #6B6B6B;

  position: absolute;

  left: 18px;
  top: 50%;

  transform: translateY(-50%);

  z-index: 0;

  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-duration: .2s;
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  margin: 6px 0 0;

  color: #f82e2e;
`;
