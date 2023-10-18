const apiKey = '43b826f946934eb31ff49952154abb88';
const pesquisaInput = document.getElementById('pesquisa-input');
const pesquisaBotao = document.getElementById('pesquisa-botao');
const catalog = document.getElementById('catalog');

pesquisaBotao.addEventListener('click', searchMovies);

async function searchMovies() {
    const query = pesquisaInput.value;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        catalog.innerHTML = '';

        data.results.forEach(filme => {
            const filmeCard = document.createElement('div');
            filmeCard.classList.add('filme-card');

            const filmeTitle = document.createElement('h2');
            filmeTitle.innerText = filme.title;

            const filmePoster = document.createElement('img');
            filmePoster.classList.add('filme-poster');
            filmePoster.src = filme.poster_path
                ? `https://image.tmdb.org/t/p/w300${filme.poster_path}`
                : 'placeholder.jpg';

            filmeCard.appendChild(filmeTitle);
            filmeCard.appendChild(filmePoster);
            catalog.appendChild(filmeCard);
        });
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}
