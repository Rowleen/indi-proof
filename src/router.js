import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from 'src/components'
import { Home, ProductDetails } from 'src/Pages'

const RouterComponent = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default RouterComponent
