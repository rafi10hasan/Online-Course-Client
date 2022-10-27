import React, { useContext,useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUserCircle, FaToggleOn } from "react-icons/fa";
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";
import "./Header.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            course<span className="text-primary fw-bold">Hub</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Nav.Link className="text-black" as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link className="text-black" as={Link} to={"/courses"}>
                courses
              </Nav.Link>
              <Nav.Link className="text-black" as={Link} to={"/faq"}>
                Faq
              </Nav.Link>
              <Nav.Link className="text-black" as={Link} to={"/blog"}>
                Blog
              </Nav.Link>
              <Nav.Link className="text-black w-full">
              
          <FaToggleOn></FaToggleOn> 
              </Nav.Link>
             
            </Nav>

            <Nav>
              <Nav.Link href="">
                {user?.uid ? (
                  <>
                    <Button variant="primary" onClick={handleLogOut}>
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="m-2" variant="primary" size="sm">
                      <Link className="text-light underline px-2 fw-bold" to="/login">
                        Login
                      </Link>
                    </Button>

                    <Button variant="warning" size="sm">
                      <Link className="text-black underline px-2 fw-bold" to="/signup">
                        signup
                      </Link>
                    </Button>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href="">
                {user?.photoURL ? (
                  
                  <Image className="circleimage" roundedCircle src={user?.photoURL}></Image>
                ) : (
                  <FaUserCircle className="fs-5 mt-3"></FaUserCircle>

                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
  
};

export default Header;
