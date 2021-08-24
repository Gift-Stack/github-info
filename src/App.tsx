import './App.css'
import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/auth'
import Home from './pages/home'
import PrivateRoute from './routing/PrivateRoute'
import AuthContext from './context/auth/authContext'

function App() {
  const { getCurrentUser } = useContext(AuthContext)
  // eslint-disable-next-line
  useEffect(() => getCurrentUser(), [])
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
        </div>
      </Switch>
    </Router>
  )
}

export default App
