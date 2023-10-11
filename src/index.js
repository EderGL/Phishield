// Importación de bibliotecas y módulos necesarios.
import React from 'react'; // Importa la biblioteca React para crear componentes.
import ReactDOM from 'react-dom'; // Importa la biblioteca ReactDOM para renderizar componentes en el DOM.
import './index.css'; // Importa un archivo de estilos CSS para la aplicación.
import App from './App'; // Importa el componente principal de la aplicación desde el archivo App.js.
import { Auth0Provider } from '@auth0/auth0-react'; // Importa el componente Auth0Provider de la biblioteca '@auth0/auth0-react' para la autenticación.

// Obtiene el dominio y el ID del cliente de Auth0 desde las variables de entorno.
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// Renderiza la aplicación en el DOM del documento.
ReactDOM.render(
  // Usa React.StrictMode para detectar posibles problemas en la aplicación durante el desarrollo.
  <React.StrictMode>
    {/* Utiliza el componente Auth0Provider para manejar la autenticación con Auth0.
         Pasa el dominio, el ID del cliente y la URI de redirección como propiedades. */}
    <Auth0Provider
      domain={domain} // Propiedad: dominio de Auth0.
      clientId={clientId} // Propiedad: ID del cliente de Auth0.
      redirectUri={window.location.origin} // Propiedad: URI de redirección después de la autenticación.
    >
      {/* Renderiza el componente principal de la aplicación, que está encapsulado dentro de Auth0Provider. */}
      <App />
    </Auth0Provider>
  </React.StrictMode>, // Fin del componente principal encapsulado en React.StrictMode.
  document.getElementById('root') // Indica que el resultado debe ser renderizado en el elemento con el ID 'root' en el DOM.
);
