import React, { Suspense, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { connect } from 'react-redux';
import history from './history';
import ContentBody from './components/layout/content-body/ContentBody';
import { fetchProducts } from './ducks/products';
import LayoutContainer from './components/layout/layout-container/LayoutContainer';
import Navbar from './components/layout/navbar/Navbar';
import { navigationLinks } from './constants/navigation-links';

const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const ExclusivesPage = React.lazy(() => import('./pages/exclusives/ExclusivesPage'));
const OnSalePage = React.lazy(() => import('./pages/on-sale/OnSalePage'));
const FavoritesPage = React.lazy(() => import('./pages/favorites/FavoritesPage'));
const ProductPage = React.lazy(() => import('./pages/product/ProductPage'));

const engine = new Styletron();

export function App(
  {
    callFetchProducts,
  },
) {
  useEffect(() => {
    callFetchProducts();
  }, [callFetchProducts]);

  return (
    <StyletronProvider value={engine}>
      <LayoutContainer>
        <Router history={history} basename="">
          <Navbar links={navigationLinks} />

          <ContentBody>
            <Switch>
              <Suspense
                fallback={
                  <p>carregando...</p>
                  }
              >
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                <Route exact path={`${process.env.PUBLIC_URL}/exclusive`} component={ExclusivesPage} />
                <Route exact path={`${process.env.PUBLIC_URL}/on-sale`} component={OnSalePage} />
                <Route exact path={`${process.env.PUBLIC_URL}/favorites`} component={FavoritesPage} />
                <Route exact path={`${process.env.PUBLIC_URL}/product/:id`} component={ProductPage} />
              </Suspense>
            </Switch>
          </ContentBody>
        </Router>
      </LayoutContainer>
    </StyletronProvider>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  callFetchProducts() {
    dispatch(fetchProducts());
  },
});

export default connect(
  false,
  mapDispatchToProps,
)(App);
