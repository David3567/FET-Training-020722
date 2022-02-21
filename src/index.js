const Api = (() => {
    const urlObj = {
        baseUrl: "http://localhost:3000",
        movies: 'movies'
    }
        
    const getMovieCardInfo = () =>
        fetch([urlObj.baseUrl, urlObj.movies].join("/")).then((response) => response.json());

    return {
        getMovieCardInfo,
    };
})();
// ~~~~~~~~~~~~View~~~~~~~~~~~~~~
const View = (() => {
    const domStr = {
        container: "#movies-container",
        imagecontainer: "#image-container"
    };
    
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((movie, i) => {
            tmp += `
                <li>
                    <figure>
                        <img src="${movie[i].imgUrl}" alt="${movie[i].title}" />
                        <figcaption>${movie[i].title}</figcaption>
                        <figcaption>${movie[i].updateInfo}</figcaption>
                    </figure>
                </li>
            `;
        });
        return tmp;
    };

    return {
        domStr,
        render,
        createTmp,
    };
})();

// ~~~~~~~~~~~~Model~~~~~~~~~~~~~~
const Model = ((api, view) => {
    class Movies {
        constructor(title, image, info) {
            this.image = image;
            this.title = title;
            this.info = info;
        }
    }

    class State {
        #movielist = [];

        get movielist() {
            return this.#todolist;
        }
        set movielist(newtodos) {
            this.#movielist = newtodos;
            // rerender the page;
            const tmp = view.createTmp(this.#movielist);
            const movielist = document.querySelector(view.domStr.imagecontainer);
            view.render(movielist, tmp);
        }
    }

    const getMovies = api.getMovieCardInfo;

    return {
        getMovies,
        State,
        Movies,
    };
})(Api, View);

// ~~~~~~~~~~~~Controller~~~~~~~~~~~~~~
const appController = ((model, view) => {
    const state = new model.State();
    const movielist = document.querySelector(view.domStr.imagecontainer);

    let id = 0;

    const init = () => {
        model.getMovies().then((movies) => {
            state.movielist = movies;
        });
    };
    const bootstrap = () => {
        init();
    };

    return { bootstrap };
})(Model, View);

appController.bootstrap();