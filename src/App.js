import React from 'react'
import { Route, Switch } from 'react-router-dom';

import AllMeetups from './routes/AllMeetups'
import Favorites from './routes/Favorites'
import NewMeetup from './routes/NewMeetup'
import Layout from './components/layout/Layout';
import { ThemeContextProvider } from './store/theme-context';
const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetups />
          </Route>
          <Route path='/new-meetup'> 
            <NewMeetup />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Switch>
      </Layout>
    </ThemeContextProvider>

  )
}

export default App;
