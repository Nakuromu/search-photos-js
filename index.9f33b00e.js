const e=document.querySelector(".search-form"),t=document.querySelector(".js-article-conteiner"),r=document.querySelector('[data-action="load-more"]'),n=new class{fetchArticles(){const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;fetch(e,{headers:{Authorization:"682ce8dcadbc49288521729e978446f2"}}).then((e=>e.json())).then((e=>(this.incrementPage(),e.articles)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function a(e){const r=e.map((e=>`<a href="${e.url}">\n      <article>\n        <img src="${e.urlToImage}" alt="">\n        <h2>${e.title}</h2>\n        <p>Posted by: ${e.author}</p>\n        <p>${e.description}</p>\n      </article>\n    </a>`)).join("");t.insertAdjacentHTML("beforeend",r)}e.addEventListener("submit",(function(e){if(e.preventDefault(),n.query=e.target.elements.query.value,n.resetPage(),""===n.query)return alert("Enter correct data!");n.fetchArticles().then((e=>{t.innerHTML="",a(e),r.classList.remove("is-hidden")}))})),r.addEventListener("click",(function(){n.fetchArticles().then(a)}));
//# sourceMappingURL=index.9f33b00e.js.map
