import React from 'react'
import Header from './components/header/header'
import Dialogs from './components/dialogs/dialogs'
import Second from './components/Second/Second'
import Third from './components/Third/Third'
import Fourth from './components/Fourth/Fourth'
import Fifth from './components/Fifth/Fifth'
import Six from './components/Six/Six'
import { Route } from 'react-router'

function App(){

    return (
      <div>
        <Header />
        <Route exact path='/' render={() => <Dialogs />}/>
        <Route path='/first'  render={() => <Dialogs />}/>
        <Route path='/second' render={() => <Second />}/>
        <Route path='/third'  render={() => <Third />}/>
        <Route path='/fourth' render={() => <Fourth />}/>
        <Route path='/fifth'  render={() => <Fifth />} />
        <Route path='/six'    render={() => <Six />} />
      </div>
    );
  
}

export default App;
