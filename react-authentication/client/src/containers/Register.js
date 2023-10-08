import { useState,useEffect } from 'react';
import { Form, Button } from "react-bootstrap";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dataInput, setDataInput] = useState({});

    const submitRegisterForm = (e) => {
        e.preventDefault();
        const userData = {
            username,
            password
        }
        setDataInput(userData);
        const authData = registerUser(userData);
        authData.then(res => console.log(res)).catch(error=>console.log(error))
    }
    async function registerUser(formData = {}) {
        const url = "http://localhost:9000/user/register";
        // Default options are marked with *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(formData), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }


    return (
      <Form onSubmit={(e)=>submitRegisterForm(e)}>
        {/* email */}
        <Form.Group controlId="reg-username">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" placeholder="Username" 
            name="reg-username" value={username} required onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="reg-password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
          name="reg-password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
        Register
        </Button>
      </Form>
    )
}

export default Register;