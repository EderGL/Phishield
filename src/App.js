// Importa los componentes LoginButton, LogoutButton y Profile desde sus respectivos archivos.
import LoginButton from "./components/LoginButton"; // Componente para iniciar sesión.
import LogoutButton from "./components/LogoutButton"; // Componente para cerrar sesión.
import Profile from "./components/Profile"; // Componente para mostrar el perfil del usuario.
import { useAuth0 } from "@auth0/auth0-react"; // Importa el hook useAuth0 para manejar la autenticación.

// Definición del componente funcional App.
function App() {
  // Usa el hook useAuth0 para obtener información sobre el estado de autenticación.
  const { isLoading, error } = useAuth0();

  // Renderiza el contenido principal de la aplicación.
  return (
    <main className="column">
      {/* Título de la aplicación. */}
      <h3>Phishield</h3>

      {/* Muestra un mensaje de error si la autenticación falla. */}
      {error && <p>Error de Autenticación</p>}

      {/* Muestra un mensaje de carga si la autenticación está en curso. */}
      {!error && isLoading && <p>Cargando...</p>}

      {/* Renderiza los componentes LoginButton, LogoutButton y Profile si la autenticación es exitosa y no está en curso. */}
      {!error && !isLoading && (
        <>
          {/* Componente para iniciar sesión. */}
          <LoginButton />

          {/* Componente para cerrar sesión. */}
          <LogoutButton />

          {/* Componente para mostrar el perfil del usuario. */}
          <Profile />
        </>
      )}
    </main>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos.
export default App;
