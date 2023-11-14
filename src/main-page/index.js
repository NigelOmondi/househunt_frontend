import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HousesContext from '../context/housesContext';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Cover from '../Cover';
import Footer from '../Footer';
import Cards from '../Cards';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);


  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
            

                <Switch>
                  <Route exact path="/">
                    <Navbar />
                    <Hero />
                  </Route>

                  <Route path="/home">
                  <Navbar />
                    <Hero />
                  </Route>

                  <Route path="/about">
                    <Navbar />
                    <Cover />
                  </Route>

                  <Route path="/features">
                    <Navbar />
                    <Cards />
                  </Route>

                  <Route path="/contact">
                    <Navbar />
                    <Footer />
                  </Route>


                  <Route path="/searchresults/:county">
                      <Header subtitle="Providing houses all over Kenya" />
                      <HouseFilter />
                    <SearchResults />
                    <Footer />
                  </Route>

                  <Route path="/house/:id">
                    <Header subtitle="Providing houses all over Kenya" />
                    <HouseFilter />
                    <HouseFromQuery />
                    <Footer />
                  </Route>

                  <Route path="/all">
                    <Header subtitle="Providing houses all over Kenya" />
                    <HouseFilter />
                    <FeaturedHouse house={featuredHouse} />
                    <Footer />
                  </Route>
                </Switch>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
