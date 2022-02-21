// ~~~~~~~~~~~Api~~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "http://localhost:3000/movies";

    const getMovies = () => {
        return fetch(baseUrl).then((response) => response.json());
    };

    return {
        getMovies
    };
})();
// ~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {

    const render = (tag, tmp) => {
        tag.innerHTML = tmp;
    };

    const createTmp = (arr) => {
        let tmp = "";

        arr.forEach((movie) => {
            // even-card makes the direction of the gradient right
            // odd-card makes the direction of the gradient left
            tmp += `
                <div class="movie-card ${movie.id % 2 !== 0 ? "even-card" : "odd-card"}" id="${movie.id}">
                    <img src="${movie.imgUrl}" alt="movie image">
                    <p class="movie-title">Movie: ${movie.title}</p>
                    <div class="movie-info">Info: ${movie.updateInfo}</div>    
                </div>
                    `;
        });

        return tmp;
    }


    return {
        render,
        createTmp
    }
})();
// ~~~~~~~~~~~Model~~~~~~~~~~~~~
const Model = ((api) => {
    class State {
        #movies = [];
        #start = 0;
        #end = 4;

        get movies() {
            return this.#movies;
        }
        get start() {
            return this.#start;
        }

        get end() {
            return this.#end;
        }

        set movies(newMovies) {
            this.#movies = newMovies;
        }

        set start(newStart) {
            this.#start = newStart;
        }

        set end(newEnd) {
            this.#end = newEnd;
        }
    }

    const getMovies = api.getMovies;

    return {
        State,
        getMovies
    };
})(Api);
// ~~~~~~~~~~~Controller~~~~~~~~~
const appController = ((model, view) => {
    const state = new model.State();
    const rightBtn = document.querySelector(".move-right");
    const leftBtn = document.querySelector(".move-left");

    const init = () => {
        model.getMovies().then((movies) => {
            state.movies = movies;
            showCarousel();
        });
    };

    const showCarousel = () => {
        const container = document.querySelector(".movie-container")
        let tmp = view.createTmp(state.movies.slice(state.start, state.end));
        view.render(container, tmp);

        leftBtn.style.visibility = state.start === 0 ? "hidden" : "visible";
        rightBtn.style.visibility = state.end === state.movies.length-1 ? "hidden" : "visible";
    };

    const moveRight = () => {
        rightBtn.addEventListener("click", () => {
            let movies = state.movies;
            state.start = Math.min(++state.start, movies.length - 5);
            state.end = state.start + 4;
            showCarousel();
        });
    };

    const moveLeft = () => {
        leftBtn.addEventListener("click", () => {
            state.start = Math.max(0,--state.start);
            state.end = state.start + 4;
            showCarousel();
        });
    };



    const bootstrap = () => {
        init();
        moveRight();
        moveLeft();
    };

    return {
        bootstrap
    };
})(Model, View);

appController.bootstrap();