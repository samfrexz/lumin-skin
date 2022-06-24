// import logo from './logo.svg';
// import './App.css';
import TopNav from './comps/TopNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Banner from './comps/Banner';
import StickyNav from './comps/StickyNav';
import BestSeller from './comps/BestSeller';

function App() {
  return (
    <Router>
      <div>
        <TopNav />
       <div>
        <Banner />
        <StickyNav />
        <BestSeller />
       </div>
      </div>
      <div>
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
