import { useState } from "react";
import morphExpressions from "morph-expressions";

import Display from "./components/Display";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";

export const App = () => {
  const parserClass = new morphExpressions();

  const valorInicial = '0';
  const [valorAtual, setValorAtual] = useState(valorInicial);
  const [clear, setClear] = useState(true);

  const handleAddNumber = valor => {
    setValorAtual(valorAntigo => clear ? valor : valorAntigo + valor);
    if (clear) setClear(false);
  }

  const handleRemoveNumber = () => {
    setValorAtual(valorAtual.substr(0, valorAtual.length - 1));
    if (valorAtual.length === 0) setValorAtual(valorInicial);
  }

  const resolveExpression = () => setValorAtual(String(parserClass.parse(valorAtual).eval()));

  return (
    <Container>
      <Content>
        <Display value={valorAtual} />
        <Row>
          <Button label="c" onClick={() => {
            setValorAtual(valorInicial);
            setClear(!clear);
          }} />
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="/" onClick={() => handleAddNumber("/")} />
          <Button label="*" onClick={() => handleAddNumber("*")} />
        </Row>
        <Row>
          <Button label="7" isNumber={true} onClick={() => handleAddNumber("7")} />
          <Button label="8" isNumber={true} onClick={() => handleAddNumber("8")} />
          <Button label="9" isNumber={true} onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleAddNumber("-")} />
        </Row>
        <Row>
          <Button label="4" isNumber={true} onClick={() => handleAddNumber("4")} />
          <Button label="5" isNumber={true} onClick={() => handleAddNumber("5")} />
          <Button label="6" isNumber={true} onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleAddNumber("+")} />
        </Row>
        <Row>
          <Button label="1" isNumber={true} onClick={() => handleAddNumber("1")} />
          <Button label="2" isNumber={true} onClick={() => handleAddNumber("2")} />
          <Button label="3" isNumber={true} onClick={() => handleAddNumber("3")} />
          <Button label="=" isEqual={true} onClick={() => resolveExpression()} />
        </Row>
      </Content>
    </Container>
  );
};
