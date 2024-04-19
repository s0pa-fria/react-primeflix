import { memo } from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons'; 
import styles from './styles.module.css'; 

function Error() { // Define o componente funcional Error.
  return (
    <div className={styles.not_found}> {/* Define um contêiner com a classe CSS 'not_found' */}
			<h1>404</h1> {/* Renderiza o título '404' */}
      <h2>Oops! Página não encontrada</h2> {/* Renderiza a mensagem de erro 'Oops! Página não encontrada' */}
			<Link to='/'> {/* Renderiza um link para a página inicial */}
				<FontAwesomeIcon icon={faArrowRotateBackward} size='lg'/> {/* Renderiza o ícone de seta */}
        Veja todos os filmes {/* Renderiza o texto do link */}
			</Link> {/* Fecha o link */}
    </div>
  );
}

export default memo(Error); // Exporta o componente Error, envolvido pela função `memo` para otimização de renderização.
