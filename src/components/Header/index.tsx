import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="Espaço vitrine" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/category">CATEGORIAS</Link>
            </li>
            <li>
              <Link to="/subcategory">SUB-CATEGORIAS</Link>
            </li>
            <li>
              <Link to="/products">PRODUTOS</Link>
            </li>
          </ul>
        </nav>
        <FiLogOut size={24} color="#FFFFFF" />
      </Content>
    </Container>
  );
}
