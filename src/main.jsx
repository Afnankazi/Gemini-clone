// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-86gj0qel0gjxltme.us.auth0.com"
    clientId="oavDKp9LV8LFndbz06M0X6Jx2LZhXJzO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
