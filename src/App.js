import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Users from "./routes/Users";
import Layout from "./components/layout/Layout";
import Loading from "./components/layout/Loading";

const AllMeetups = lazy(() => import("./routes/AllMeetups"));
const Favorites = lazy(() => import("./routes/Favorites"));
const NewMeetup = lazy(() => import("./routes/NewMeetup"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
