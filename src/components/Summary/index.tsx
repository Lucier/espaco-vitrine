import { Container } from './styles';

export function Summary(): JSX.Element {
  return (
    <Container>
      <div className="total-card">
        <header>
          <p>Clientes cadastrados</p>
        </header>
        <strong>112</strong>
      </div>

      <div className="total-card">
        <header>
          <p>Produtos cadastrados</p>
        </header>
        <strong>500</strong>
      </div>

      <div className="total-card">
        <header>
          <p>Vendas realizadas</p>
        </header>
        <strong>406</strong>
      </div>
    </Container>
  );
}
