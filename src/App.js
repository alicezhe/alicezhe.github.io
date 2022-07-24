import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './theme/GlobalStyles'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App h-screen flex flex-col justify-between">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/projects" exact component={() => <Projects />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
