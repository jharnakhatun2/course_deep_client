import React, { useContext } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import { AuthContext } from '../layer/UserContext';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log('context', user);

  const handleLogOut =()=>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error));
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand text-warning clogo"><h3>CourseDeep</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">
            <NavLink className ="{({isActive})=> isActive ? 'active' : undefined} nav-link px-3" to='/' >Courses</NavLink>
            <NavLink className ="nav-link px-3" to='/faq' >FAQ</NavLink>
            <NavLink className ="nav-link px-3" to='/blog' >Blog</NavLink>
            <NavLink className ="nav-link px-3" to='/checkout' >CheckOut</NavLink>
            <NavLink className ="nav-link px-3" to="/register">Register</NavLink>
            {/* toggle login and logout button */}
            {
              user?.email?
              <li onClick ={handleLogOut}><NavLink className ="nav-link px-3" to=''>Log Out</NavLink></li>
              : <NavLink  className ="nav-link px-3" to='/login'>Log In</NavLink>
            }
            {user?.email && <span className="text-white px-3">{user?.email}</span>}
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;