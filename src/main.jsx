import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserListView from './views/UserListView'
import HeaderView from './views/HeaderView'
import FooterView from './views/FooterView'


ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <HeaderView />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserListView />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <FooterView />
  </React.StrictMode>,
)