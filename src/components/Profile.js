// Importa el hook useAuth0 desde la biblioteca '@auth0/auth0-react' para manejar la autenticación.
import { useAuth0 } from '@auth0/auth0-react';

// Definición del componente funcional Profile.
const Profile = () => {
    // Extrae la información del usuario y el estado de autenticación del hook useAuth0.
    const { user, isAuthenticated } = useAuth0();

    // Renderiza el perfil del usuario si está autenticado.
    return (
        isAuthenticated && (
            // Renderiza un artículo con la imagen del perfil del usuario (si está disponible) y el nombre del usuario.
            <article className='column'>
                {user?.picture && <img src={user.picture} alt={user?.name} />} {/* Renderiza la imagen del perfil si está disponible. */}
                <h2>{user?.name}</h2> {/* Renderiza el nombre del usuario. */}
            </article>
        )
    );
}

// Exporta el componente Profile para que pueda ser utilizado en otros archivos.
export default Profile;
