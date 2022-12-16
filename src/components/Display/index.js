
import { InputContainer } from './styles';

const Display = ({value}) => {
    return (
      <InputContainer>
       <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Display;