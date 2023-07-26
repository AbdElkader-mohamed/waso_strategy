import { Fragment } from 'react';

import Nav from './components/Nav'
import Hero from './components/Hero';

function App() {
  return (
    <Fragment>

      <Nav/>
    <main data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
    
      <Hero/>
    
    </main>
    </Fragment>
  );
}

export default App;
