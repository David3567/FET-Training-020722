const Api = (() => {
        
    const getMovies = () =>
        fetch("http://localhost:3000/movies").then((response) => response.json());

    return {
        getMovies,
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
        arr.forEach((movie) => {
            tmp += `
                <li>
                    <figure>
                        <img src="${movie.imgUrl}" alt="${movie.title}" />
                        <figcaption>${movie.title}</figcaption>
                        <figcaption>${movie.updateInfo}</figcaption>
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

    class State {
        #movielist = [];

        get movielist() {
            return this.#movielist;
        }
        set movielist(newmovies) {
            this.#movielist = newmovies;
            // rerender the page;
            const tmp = view.createTmp(this.#movielist);
            const movielist = document.querySelector(view.domStr.imagecontainer);
            view.render(movielist, tmp);
        }
    }

    const getMovies = api.getMovies;

    return {
        getMovies,
        State,
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
