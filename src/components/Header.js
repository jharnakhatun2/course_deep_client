import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="navbar bg-neutral text-primary-content">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-warning text-xl">daisyUI</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/order' >Order</Link></li>
          <li><Link to="/register">Register</Link></li>
          {/* toggle login and logout button */}
          {
              user?.email?
              <li onClick ={handleLogOut}><Link to=''>Log Out</Link></li>
              : <li><Link to='/login'>Log In</Link></li>
          }
          <li>{user?.email && <span>{user?.email}</span>}</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;