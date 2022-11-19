import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OffCanvas from './Offcanvas';

function ContainerInsideExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <OffCanvas />
        <Navbar.Brand href="/">CHERKASHYN DMYTRO</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
