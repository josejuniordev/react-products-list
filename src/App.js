import React, { Suspense, useEffect, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import {Client as Styletron} from 'styletron-engine-atomic';
import history from './history';
import ContentBody from './components/layout/content-body/ContentBody';
import { Provider as StyletronProvider } from 'styletron-react';

const HomePage = React.lazy(() => import('./pages/HomePage'));

const engine = new Styletron();

function App() {

  useEffect(() => {
  }, []);
  return (
    <StyletronProvider value={engine}>
      <ContentBody>
        <Router history={history} basename=''>
          <Switch>
            <Suspense
              fallback={
                <p>carregando...</p>
              }
            >
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
            </Suspense>
          </Switch>
        </Router>
      </ContentBody>
    </StyletronProvider>
  );
}

export default App;
