import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Cover from "./coverPage";
import Features from "./featuresPage";
import About from "./aboutPage";
import Video from "./video";
import Contact from "./contactUs"
import Header from "./main-page/header"

const HomePage = () => {
    return (
        <>
          <div className='row'>
              <div className='col-md-5'>
                  <Header />
               </div>
               <div className='col md-7'>
               <nav>
                  <ul>
                    <li><Link to="/cover">Cover</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/video">Video</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
               </div>
            <div>
            
             <div className="home-container">
              <div className="cover">
                <h1>Welcome to House Hunt</h1>
                <p>HouseHunt is a real estate working solution for everyone,<br></br>
                both first time house or home buyers to the<br></br>
                more experienced group(s) looking to buy property.
                <br></br>
                <br></br>
                We help you right from the first step of prospecting houses<br></br>
                to the final step of making an offer and everything in between!</p>
                <Link to="/all">
                    <button>See Houses</button>
                </Link>
              </div>
             </div>

            </div>
               <Switch>
                <Route path="/cover" component={Cover} />
                <Route path="/features" component={Features} />
                <Route path="/about" component={About} />
                <Route path="/video" component={Video} />
                <Route path="/contact" component={Contact} />
               </Switch>
            </div>
        </>
    );
}

export default HomePage;
