import KcInit from "keycloak-js";

const kc = new KcInit({
 url: "http://localhost:8080/auth",
 realm: "kc-react-realm",
 clientId: "react-auth",
});

export default kc;
