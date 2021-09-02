import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, ProductDetails } from 'src/Pages'

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  )
}

export default RouterComponent
