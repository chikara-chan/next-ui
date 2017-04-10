import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Layout from './views/Layout'
import Introduction from './views/Introduction'

const RedirectToIntro = () => <Redirect to='introduction' />

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' render={RedirectToIntro} />
        <Route path='/introduction' component={Introduction} />
      </Switch>
    </Layout> 
  </BrowserRouter>
)

export default Router
