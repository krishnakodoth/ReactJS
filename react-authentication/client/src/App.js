import './App.css';
import { Container, Col, Row } from "react-bootstrap";
import { Routes, Route, Outlet,NavLink } from "react-router-dom";
import Account from './Account';
import FreeComponent from './containers/FreeComponent';
import AuthComponent from './containers/AuthComponent';



function App() {


  /* useEffect(()=>{
    console.log(accessToken)
  },[accessToken]) */

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>

          <section id="navigation">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/free"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Free Component
            </NavLink>
            <NavLink
              to="/auth"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Auth Component
            </NavLink>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route path="/auth" element={<AuthComponent />} />
      </Routes>
    </Container>
  );
  {/*
      accessToken === "" ?
      (<div className="login-form">
        <div className="message-box">
        {pageMessage}
        </div>
        <Login 
        setPageMessage={setPageMessage}
        setAccessToken = {setAccessToken} />
        <Register />
      </div>)
      :
      (
        <p>Authenticated.... {accessToken}</p>
      )
    */}
}

export default App;
