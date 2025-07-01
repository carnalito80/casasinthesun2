import './App.css';
import PropertyWrap from "./components/PropertyWrap"
// import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
// import Contact from "./components/Contact"
import ContactPage from "./components/ContactPage/ContactPage"
// import About from "./components/About"
import Estepona from "./components/Estepona"
import Marbella from './components/Marbella';
import Malaga from "./components/Malaga"
import Guides from "./components/Guides"
// import BlogDetail from "./components/BlogDetail"
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Notfound from './components/Notfound';
import Nav from './components/Nav'
import ScrollToTop from './helpers/ScrollToTop';
import GuideWrap from "./components/GuideWrap"
 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact"  component={ContactPage} ></Route>
          <Route path="/apartments-marbella">
            <Marbella version={"apartment"} />
          </Route>
          <Route path="/houses-marbella">
            <Marbella version={"house"} />
          </Route>
          <Route path="/marbella">
            <Marbella version={""} />
          </Route>
          <Route path="/apartments-estepona">
            <Estepona version={"apartment"} />
          </Route>
          <Route path="/estepona">
            <Estepona version={""} />
          </Route>
          <Route path="/houses-malaga">
            <Malaga version={"house"} />
          </Route>
          <Route path="/apartments-malaga">
            <Malaga version={"apartment"} />
          </Route>
          <Route path="/malaga">
            <Malaga version={""} />
          </Route>
          <Route path="/guides" exact component={Guides}></Route>
          <Route path="/guides/:id"  component={GuideWrap}></Route>
          <Route path="/properties" exact component={Home}></Route>
          <Route path="/properties/:slug"  component={PropertyWrap}></Route>
          <Route component={Notfound} ></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
