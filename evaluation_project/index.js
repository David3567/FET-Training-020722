const Api = (() => {
    const url = "http://localhost:3000";
    const dir = "movies";

    const getMovie = () => {
        fetch(url.concat('/',dir))
        .then(response => response.json())
        .catch(error => error.json());
    };

    return {
        getMovie
    };
})();

console.log(Api);

const View = (() => {
    const domElement = {
        movie: ".movie-container",
        leftbtn: ".move-left",
        rightbtn: ".move-right"
    };

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    };

    const createMovieData = (arr) => {
        let info = "";
        arr.forEach((element) => {
            info += `
                <div class="movie-container">
                    <img src="${element.imgUrl}" alt="movie title art">
                    <p class="title">Movie: ${element.title}</p>
                    <p class="detail">Info: ${element.updateInfo}</p>
                </div>
            `;
        });
        return info;
    };

    return {
        domElement,
        render,
        createMovieData
    };
})();

const Model = ((api) => {
    class State {
        #movieList = [];
        #begin = 0;
        #end = 3;

        get movieList() {
            return this.#movieList;
        }set movieList(newMovie) {
            this.#movieList = newMovie;
        };

        get begin() {
            return this.#begin;
        }set begin(newBegin) {
            this.#begin = newBegin;
        };

        get end() {
            return this.#end;
        }set end(newEnd) {
            this.#end = newEnd;
        };
    };

    const getMovie = api.getMovie;

    return {
        getMovie,
        State
    };
})(Api);

const Controller = ((model, view) => {
    const state = new model.State();
    const leftBtn = document.querySelector(view.domElement.leftbtn);
    const rightBtn = document.querySelector(view.domElementr.rightBtn);

    const carousel = () => {
    };

    const moveLeftBtn = () => {
        leftBtn.addEventListener("click", () => {
            document.getElementsByClassName("movie-holder").scrollLeft -= [].length;
        })

    const moveRightBtn = () => {
        rightBtn.addEventListener("click", () => {
            document.getElementsByClassName("movie-holder").scrollLeft += [].length;
        })

    const init = () => {
        model.getMovie().then((movieList) => {
            state.movieList = movieList;
            carousel();
        });
    };
    
    const bootstrap = () => {
        init();
        moveLeftBtn();
        moveRightBtn();
    };

    return { bootstrap };

})(Model, View);

Controller.bootstrap();
