import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-qyzww6nsdc8oa355.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
