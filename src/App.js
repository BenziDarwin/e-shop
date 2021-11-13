import './App.css';
import {Routes,Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/Home';
import Navigationbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { Col, Row } from 'react-bootstrap';
import Additem from './Components/Additem';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar/>
        <Row>
          <Col xs={4} lg={3}>
            <Sidebar />
          </Col>
          <Col id="main-screen">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacts" element={<h1>this is the contacts page</h1>}/>
            <Route path="/about" element={<h1>this is the About page</h1>}/>
            <Route path="/help" element={<h1>this is the help page</h1>}/>
            <Route path="/shop" element={<h1>this is the shop page</h1>}/>
            <Route path="/shop/additem" element={<Additem/>}/>
          </Routes>
          </Col>
        </Row>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
