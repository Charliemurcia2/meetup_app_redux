import React from 'react'
import { Route, Switch } from 'react-router-dom';

import AllMeetups from './routes/AllMeetups'
import Favorites from './routes/Favorites'
import NewMeetup from './routes/NewMeetup'
import Users from './routes/Users';
import Layout from './components/layout/Layout';
import { ThemeContextProvider } from './store/theme-context';
import { MeetupsContextProvider } from './store/meetups-context';
const App = () => {
  return (
    <ThemeContextProvider>
      <MeetupsContextProvider>
        <Layout>
          <Switch>
            <Route path='/meetup_app' exact>
              <AllMeetups />
            </Route>
            <Route path='/new-meetup'> 
              <NewMeetup />
            </Route>
            <Route path='/favorites'>
              <Favorites />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
          </Switch>
        </Layout>
      </MeetupsContextProvider>
    </ThemeContextProvider>

  )
}

export default App;
