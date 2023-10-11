// Importa el hook useAuth0 desde la biblioteca '@auth0/auth0-react' para manejar la autenticación.
import { useAuth0 } from '@auth0/auth0-react';

// Definición del componente funcional LogoutButton.
const LogoutButton = () => {
    // Extrae las funciones logout e isAuthenticated del hook useAuth0.
    const { logout, isAuthenticated } = useAuth0();

    // Renderiza el botón de cierre de sesión si el usuario está autenticado.
    return (
        isAuthenticated && (
            // Renderiza un botón que, al hacer clic, ejecuta la función de cierre de sesión (logout) de Auth0.
            <button onClick={() => logout()}>
                Cerrar Sesión
            </button>
        )
    );
}

// Exporta el componente LogoutButton para que pueda ser utilizado en otros archivos.
export default LogoutButton;
