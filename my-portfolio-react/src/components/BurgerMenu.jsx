import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenuLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import style from './BurgerMenu.css';

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="outline-dark" onClick={toggleShow} className="me-2">
        <RiMenuLine />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={style.active}>
          <NavLink to="." end>
            Home
          </NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="about">About</NavLink>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
