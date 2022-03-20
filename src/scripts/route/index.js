import React from 'react';
import * as reactRouterDom from 'react-router-dom';
import * as Page from '../views/pages';
import * as Component from '../views/components';

function Router() {
  return (
    <reactRouterDom.Switch>

      {/* Dashborard Page */}
      <reactRouterDom.Route exact path="/">
        <Component.Navbar />
        <Page.HomePage />
      </reactRouterDom.Route>
      <reactRouterDom.Route exact path="/about">
        <Component.Navbar />
        <Page.AboutPage />
      </reactRouterDom.Route>

      <reactRouterDom.Route exact path="*">
        <reactRouterDom.Redirect from="*" to="/" />
      </reactRouterDom.Route>
    </reactRouterDom.Switch>
  );
}

export default Router;
