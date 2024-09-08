
export default class NewsApiService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles(){
        const options = {
            headers: {
                Authorization: '682ce8dcadbc49288521729e978446f2'
            }
        }
        const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

        fetch(url,options)
        .then(r => r.json())
        .then(data => {
            this.incrementPage();
            
            return data.articles;
        })
    }

    incrementPage(){
        this.page +=1;
    }
    
    resetPage(){
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery){
        this.searchQuery = newQuery;
    }
}