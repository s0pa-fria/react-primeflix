import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faRemove, faVideo } from '@fortawesome/free-solid-svg-icons'; 
import { Button } from '../../components'; 
import { toast } from 'react-toastify'; 

import styles from './styles.module.css'; 

function Favorites() { // Define o componente funcional Favorites.
  const [movies, setMovies] = useState([]); // Define o estado 'movies' e a função 'setMovies' para gerenciar a lista de filmes favoritos.

  useEffect(() => { // Define um efeito que é executado apenas após a montagem do componente.
    const myList = localStorage.getItem('@primeflix'); // Obtém a lista de filmes favoritos do armazenamento local.
    setMovies(JSON.parse(myList) || []); // Atualiza o estado 'movies' com a lista de filmes favoritos obtida do armazenamento local, ou define como um array vazio se não houver lista.
  }, []); // O segundo argumento (um array vazio) indica que este efeito deve ser executado apenas uma vez, após a montagem inicial do componente.

  function removeMovie(id) { // Define a função 'removeMovie' para remover um filme da lista de favoritos.
    let filterMovies = movies.filter((movie) => { // Filtra a lista de filmes para remover o filme com o ID fornecido.
      return (movie.id !== id); // Retorna verdadeiro para manter os filmes que não têm o ID fornecido.
    });

    setMovies(filterMovies); // Atualiza o estado 'movies' com a lista de filmes filtrada.

    localStorage.setItem('@primeflix', JSON.stringify(filterMovies)); // Atualiza o armazenamento local com a lista de filmes filtrada.

    toast.success('Filme removido com sucesso.'); // Exibe uma mensagem de sucesso usando a função 'toast' da biblioteca 'react-toastify'.
  }

  return (
    <div className={styles.container}> {/* Define um contêiner com a classe CSS 'container' */}
      <div className={styles.my_movies}> {/* Define um contêiner com a classe CSS 'my_movies' */}
        <h1>Meus Filmes</h1> {/* Renderiza o título 'Meus Filmes' */}
        {movies.length === 0 && ( // Renderiza uma mensagem quando a lista de filmes favoritos está vazia.
          <span>Você não possui nenhum filme salvo :(</span> // Renderiza a mensagem quando a lista de filmes favoritos está vazia.
        )}
        <ul> {/* Define uma lista não ordenada */}
          {movies.map((movie) => ( // Mapeia a lista de filmes favoritos e renderiza cada um deles como um item de lista.
            <li key={movie.id}> {/* Define um item de lista com uma chave única */}
              <span> {/* Define uma área para o título do filme */}
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link> {/* Renderiza um link para os detalhes do filme */}
              </span>
              <div className={styles.area_buttons}> {/* Define uma área para os botões */}
                <Link to={`/movie/${movie.id}`}> {/* Renderiza um link para os detalhes do filme */}
                  <Button // Renderiza um botão para visualizar os detalhes do filme
                    icon={<FontAwesomeIcon icon={faVideo} size='xs' />} // Define o ícone do botão como um ícone de vídeo
                    text='Detalhes' // Define o texto do botão como 'Detalhes'
                    backgroundColor='blue' // Define a cor de fundo do botão como azul
                  />
                </Link>
                <Button // Renderiza um botão para remover o filme da lista de favoritos
                  icon={<FontAwesomeIcon icon={faRemove} size='xs' />} // Define o ícone do botão como um ícone de remoção
                  text='Excluir' // Define o texto do botão como 'Excluir'
                  backgroundColor='red' // Define a cor de fundo do botão como vermelho
                  handleOnClick={() => removeMovie(movie.id)} // Define a função de clique do botão para remover o filme da lista de favoritos
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorites; // Exporta o componente Favorites.
