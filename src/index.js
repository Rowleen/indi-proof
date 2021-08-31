import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/Index.module.sass'
import { Layout } from 'src/components'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
