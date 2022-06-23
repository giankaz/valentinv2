import {Switch, Route} from 'react-router-dom'
import NotFound from '../pages/404'
import Building from '../pages/Building'
import Gallery from '../pages/Gallery'
import GalleryGrid from '../pages/Gallery/GalleryGrid'
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
    <Route  path='/galeria/:id'>
        <GalleryGrid/>
    </Route>
    <Route path='/galeria/:id/:slug'>
        <GalleryGrid/>
    </Route>
    <Route exact path='/construindo'>
        <Building/>
    </Route>
     <Route  path='/:not'>
        <NotFound/>
    </Route> 
    <Route  path='/foto-nao-encontrada'>
        <NotFound/>
    </Route> 
    </Switch>
  )
}
