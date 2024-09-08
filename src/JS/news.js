import NewsApiService from './API'

const searchFormEl = document.querySelector('.search-form');
const articleConteiner = document.querySelector('.js-article-conteiner');
const loadMoreBtn = document.querySelector('[data-action="load-more"]')

const newsApiService = new NewsApiService();

searchFormEl.addEventListener('submit', onSearch)
loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(event){
    event.preventDefault();
    newsApiService.query = event.target.elements.query.value;
    newsApiService.resetPage();

    if(newsApiService.query === ''){
        return alert('Enter correct data!');
    }

    newsApiService.fetchArticles().then(articles => {
        clearArticleConteiner();
        appendMarkup(articles);
        loadMoreBtn.classList.remove('is-hidden');
    });
}

function onLoadMore() {
    newsApiService.fetchArticles().then(appendMarkup);
}

function appendMarkup(data) {
    const markup = data.map(item => {
        return `<a href="${item.url}">
      <article>
        <img src="${item.urlToImage}" alt="">
        <h2>${item.title}</h2>
        <p>Posted by: ${item.author}</p>
        <p>${item.description}</p>
      </article>
    </a>`;
    }).join('');

    articleConteiner.insertAdjacentHTML('beforeend', markup);
}

function clearArticleConteiner(){
    articleConteiner.innerHTML = '';
}