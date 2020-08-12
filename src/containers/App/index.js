import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersPage from '../UsersPage/Loadable';
import AddUserPage from '../AddUserPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../globalStyles';

import Wrapper from './Wrapper';
import NavBar from '../../components/NavBar';

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path='/' component={UsersPage} />
        <Route path='/add-user' component={AddUserPage} />
        <Route path='' component={NotFoundPage} />
      </Switch>
    </Wrapper>
  );
};

export default App;
