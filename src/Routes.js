import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Bullseye, Spinner } from '@patternfly/react-core';

const SamplePage = lazy(() => import(/* webpackChunkName: "SamplePage" */ './Routes/SamplePage/SamplePage'));

/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */
export const Routes = () => (
  <Suspense
    fallback={
      <Bullseye>
        <Spinner />
      </Bullseye>
    }
  >
    <Switch>
      <Route path="/sample" component={SamplePage} />
      {/* Finally, catch all unmatched routes */}
      <Route>
        <Redirect to="/sample" />
      </Route>
    </Switch>
  </Suspense>
);
