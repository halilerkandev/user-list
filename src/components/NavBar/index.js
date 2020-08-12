import React from 'react';

import NavLink from './NavLink';

const NavBar = () => {
  return (
    <header>
      <NavLink to='/'>Users</NavLink>
      <NavLink to='/add-user'>Add User</NavLink>
    </header>
  );
};

export default NavBar;
