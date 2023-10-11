// Importa el hook useAuth0 desde la biblioteca '@auth0/auth0-react' para manejar la autenticación.
import { useAuth0 } from '@auth0/auth0-react';

// Definición del componente funcional LoginButton.
const LoginButton = () => {
    // Extrae las funciones loginWithRedirect e isAuthenticated del hook useAuth0.
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    // Renderiza el botón de inicio de sesión si el usuario no está autenticado.
    return (
        !isAuthenticated && (
            // Renderiza un botón que, al hacer clic, redirige al usuario a la página de inicio de sesión de Auth0.
            <button onClick={() => loginWithRedirect()}>
                Iniciar Sesión
            </button>
        )
    );
}

// Exporta el componente LoginButton para que pueda ser utilizado en otros archivos.
export default LoginButton;
