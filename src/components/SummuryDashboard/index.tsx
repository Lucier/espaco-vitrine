import {
  FiDollarSign,
  FiPackage,
  FiShoppingCart,
  FiUsers,
} from 'react-icons/fi';
import { Container } from './styles';

export function SummaryDashboard() {
  return (
    <Container>
      <div className="total-card">
        <header>
          <p>Clientes cadastrados</p>
          <FiUsers size={50} color="#FFF" />
        </header>
        <strong>203</strong>
      </div>
      <div className="total-card">
        <header>
          <p>Produtos cadastrados</p>
          <FiPackage size={50} color="#FFF" />
        </header>
        <strong>546</strong>
      </div>
      <div className="total-card">
        <header>
          <p>Vendas</p>
          <FiShoppingCart size={50} color="#FFF" />
        </header>
        <strong>1125</strong>
      </div>
      <div className="total-card">
        <header>
          <p>Valor Vendas</p>
          <FiShoppingCart size={50} color="#FFF" />
        </header>
        <strong>R$ 5000,00</strong>
      </div>
      <div className="total-card">
        <header>
          <p>Valor estoque</p>
          <FiDollarSign size={50} color="#FFF" />
        </header>
        <strong>R$ 20000,00</strong>
      </div>
    </Container>
  );
}
