import React, { Suspense, useEffect, Fragment } from 'react';
import { Router, Switch, Route, NavLink, useLocation } from 'react-router-dom';
import './App.scss';
import {Client as Styletron} from 'styletron-engine-atomic';
import history from './history';
import ContentBody from './components/layout/content-body/ContentBody';
import { Provider as StyletronProvider } from 'styletron-react';
import { connect } from 'react-redux';
import { fetchProducts } from './ducks/products';
import LayoutContainer from './components/layout/layout-container/LayoutContainer';
import Navbar from './components/layout/navbar/Navbar';

const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const ExclusivesPage = React.lazy(() => import('./pages/exclusives/ExclusivesPage'));

const engine = new Styletron();

export function App(
  props
) {
  const {location} = history;

  useEffect(() => {
    props.callFetchProducts();
  }, []);

  const links = [
    {
      text: '',
      image: '/images/code@2x.png',
      isLogo: true,
      route: '/',
    },
    {
      text: 'Todos',
      image: '/images/supplies@2x.png',
      isLogo: false,
      route: '/',
    },
    {
      text: 'Exclusivos',
      image: '/images/box@2x.png',
      isLogo: false,
      route: '/exclusive',
    },
    {
      text: 'Promoção',
      image: '/images/gift-box@2x.png',
      isLogo: false,
      route: '/on-sale',
    },
    {
      text: 'Favoritos',
      image: '/images/recommended@2x.png',
      isLogo: false,
      route: '/favorites',
    }
  ];

  return (
    <StyletronProvider value={engine}>
      <LayoutContainer>
        <Router history={history} basename=''>
          <Navbar links={links} />

          <ContentBody>
              <Switch>
                <Suspense
                  fallback={
                    <p>carregando...</p>
                  }
                >
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                  <Route exact path={`${process.env.PUBLIC_URL}/exclusive`} component={ExclusivesPage} />
                </Suspense>
              </Switch>
          </ContentBody>
        </Router>
      </LayoutContainer>
    </StyletronProvider>
  );
}

export const mapDispatchToProps = dispatch => {
  return {
    callFetchProducts() {
      dispatch(fetchProducts());
    }
  }
};

export default connect(
  false,
  mapDispatchToProps,
)(App);
