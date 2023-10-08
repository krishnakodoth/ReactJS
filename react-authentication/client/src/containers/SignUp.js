
import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from './containers/Login';
import Register from './containers/Register';

export default function SignUp() {
    const [pageMessage, setPageMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");
  return (
    <Container>
<Row>
  <Col xs={12} sm={12} md={6} lg={6}>
    <Register />
  </Col>

  <Col xs={12} sm={12} md={6} lg={6}>
  <Login 
  setPageMessage={setPageMessage}
  setAccessToken = {setAccessToken} />
  </Col>
</Row>
</Container>
  );
}
