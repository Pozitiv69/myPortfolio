import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BurgerMenu from './BurgerMenu';

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <BurgerMenu />
        <Navbar.Brand href="/">CHERKASHYN DMYTRO</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
