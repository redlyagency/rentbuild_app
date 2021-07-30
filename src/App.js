import React, { Suspense, lazy } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navbar from './templates/Navbar/navbarTemplate';

document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

const GlobalStyle = createGlobalStyle`

`;
const AppWrapper = styled.div`

`;

const Discover = lazy(() => import('./views/discover'));
const Details = lazy(() => import('./views/details'));

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <Navbar />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={ 300 }
                classNames="fade"
              >
                <Suspense fallback={
                  <div />
                }>
                  <Switch location={location}>
                    <Route exact path="/" component={ Discover } />
                    <Route exact path="/details" component={ Details } />
                  </Switch>
                </Suspense>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
      </AppWrapper>
    </>
  );
}

export default App;
