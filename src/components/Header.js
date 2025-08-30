import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../layer/UserContext";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="navbar sticky-top navBorder py-1 "
    >
      <Container>
        <Navbar.Brand className="navbar-brand">
          <Link className="clogo text-decoration-none text-warning" to="/">
            Course Deep
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-1">
            <NavLink
              className="{({isActive})=> isActive ? 'active' : undefined} nav-link px-3 text-uppercase mx-1"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link px-3 text-uppercase mx-1"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink className="nav-link px-3 text-uppercase mx-1" to="/blog">
              Blog
            </NavLink>

            {/* toggle login and logout button */}
            {user?.email ? (
              <>
                <li onClick={handleLogOut}>
                  <NavLink className="nav-link px-3 text-uppercase mx-1" to="">
                    Log Out
                  </NavLink>
                </li>
                <NavLink
                  eventKey={2}
                  href="#memes"
                  className="nav-link px-3 mx-1"
                >
                  {user?.email ? (
                    <FaUserCircle className="text-5xl w-f" />
                  ) : (
                    <Image
                      style={{ height: "25px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  )}
                </NavLink>
              </>
            ) : (
              <NavLink
                className="nav-link px-3 text-uppercase mx-1"
                to="/register"
              >
                Register | Log In
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
