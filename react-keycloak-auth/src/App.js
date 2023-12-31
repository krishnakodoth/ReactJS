// eslint-disable-next-line
import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import KC from "./Keycloak"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={KC}>
       <Nav />
       {/* <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route path="/secured" element={<SecuredPage />} />
         </Routes>
       </BrowserRouter>*/}
       </ReactKeycloakProvider>
   </div>
 );
}

export default App;