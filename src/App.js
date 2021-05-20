import './App.css';
import Catalogue from './pages/Catalogue';
import Basket from './pages/Basket';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
    <Switch>
    <Route exact path='/' component={Catalogue}></Route>
    <Route exact path='/basket' component={Basket}></Route>
    </Switch>
    </>
  );
}

export default App;
