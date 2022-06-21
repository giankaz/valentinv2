import {Switch, Route} from 'react-router-dom'
import Gallery from '../pages/Gallery'
import Games from '../pages/Games'
import Home from '../pages/Home'

export default function Routes() {
  return (
    <Switch>
    <Route exact path='/'>
        <Home/>
    </Route>
    <Route exact path='/jogos'>
        <Games/>
    </Route>
    <Route exact path='/galeria'>
        <Gallery/>
    </Route>
    </Switch>
  )
}
