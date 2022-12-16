import { ButtonContainer } from "./styles";

const Button = ({ label, onClick, isNumber, isEqual }) => {
  return (
    <ButtonContainer
     type="button"
     onClick={onClick}
     isNumber={isNumber}
     isEqual={isEqual}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
