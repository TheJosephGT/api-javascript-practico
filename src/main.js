const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers : {
        'Content-type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    }
})

async function getTrendingMoviesPreview(){
    const { data } = await api('trending/movie/day');

    const movies = data.results
    movies.forEach(movie => {

        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)

        movieContainer.appendChild(movieImg)
        trendingPreviewMoviesContainer.appendChild(movieContainer)

    });
}

async function getCategoriesPreview(){
    const { data } = await api('genre/movie/list?api_key=' + API_KEY);

    const categories = data.genres
    categories.forEach(category => {

        const trendingPreviewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const h3 = document.createElement('h3')
        h3.classList.add('category-title')
        h3.setAttribute('id', 'id' + category.id)
        h3.innerText = category.name

        trendingPreviewCategoriesContainer.appendChild(categoryContainer)
        categoryContainer.appendChild(h3)
    });
}