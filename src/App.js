import TopNav from './comps/TopNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Banner from './comps/Banner';
import StickyNav from './comps/StickyNav';
import BestSeller from './comps/BestSeller';
import MobileNav from './comps/MobileNav';
import { useState } from 'react';

function App() {
  const [nav, setNav] = useState(false)
  return (
    <Router>
    <div>
      <TopNav setNav={setNav} nav={nav}/>
     <div>
      <Banner />
      <StickyNav />
      <BestSeller />
      { nav &&  <MobileNav handleClose={()=> setNav(false)} nav={nav} />}
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
