import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "jquery/dist/jquery"
import "popper.js/dist/popper"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Signin from './Component/Auth/Signin';
import Signup from './Component/Auth/Signup';
import BusTickets from './Component/RedBusHelp/BusTickets';
const App = () => {

    return (
        <div>
            <section>
                <article>
                    <Router>
                        <NavBar />
                        {/* Dynamic Routing Starts Here */}
                        <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/signin" exact>
                            <Signin />
                        </Route>
                        <Route path="/signup" exact>
                            <Signup />
                        </Route>
                        <Route path="/bus-tickets" exact>
                            <BusTickets />
                        </Route>
                        </Switch>
                         {/* Dynamic Routing Ends Here */}
                    </Router>
                </article>
            </section>
        </div>
    )
}

export default App
