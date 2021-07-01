import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Blogs from './pages/Blogs';
import PageNotFound from './pages/404';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css'
import './styles/Navbar.css';
import './styles/contact.css'
import './styles/Resume.css'
import './styles/AboutMe.css'
const App = () => {
    return (
        <div className="App">
            <Router hashType="noslash">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/blogs" exact component={Blogs} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
