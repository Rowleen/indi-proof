import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/Index.module.sass'
import { Layout } from 'src/components'
import RouterComponent from './router'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterComponent />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
