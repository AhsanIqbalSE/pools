import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Pools = lazy(() => import('./pools/Pools'));



const AppRoutes =()=> {
 
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/pools" component={ Pools } />

          <Redirect to="/pools" />
        </Switch>
      </Suspense>
    );
  }


export default AppRoutes;