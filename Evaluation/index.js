// ~~~~~~~~~~~~Api~~~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const movies = "movies";

    const getMovies = () =>
        fetch([baseUrl, movies].join("/"))
            .then((response) => response.json())

    return { getMovies };
})();

// ~~~~~~~~~~~~View~~~~~~~~~~~~~~
const View = (() => {
    const domStr = {
        container: ".container",
        movieslist: ".movie-holder",
        nextbutton: ".move-right",
        prevbutton: ".move-left"
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }
    const createTmp = arr => {
        let tmp = '';
        arr.forEach(movie => {
            tmp += `
            <div>
                <img src="${movie.imgUrl}">
                <p>${movie.title}</p>
                <p>${movie.updateInfo}</p>
            </div>
            `;
        });
        return tmp;
    }

    return {
        domStr,
        render,
        createTmp
    };
})();

// ~~~~~~~~~~~~Model~~~~~~~~~~~~~~
const Model = ((api, view) => {

    class State {
        #movieslist = [];

        get movieslist() {
            return this.#movieslist;
        }
        set movieslist(newmovieslist) {
            this.#movieslist = newmovieslist;
            const tmp = view.createTmp(this.#movieslist);
            const movieslist = document.querySelector(view.domStr.movieslist);
            view.render(movieslist, tmp);
        }
    }


    const getMovies = api.getMovies;

    return {
        State,
        getMovies
    };
})(Api, View);

// ~~~~~~~~~~~~Controller~~~~~~~~~~~~~~
const appController = ((model, view) => {
    const state = new model.State();
    var currentIndex = 0;
    var scrollByFour = 4;

    //Initial rendering of the page
    const init = () => {
        const leftBtn = document.querySelector(view.domStr.prevbutton);
        leftBtn.hidden = true;
        model.getMovies().then(movies => {
            // console.log(Array.isArray(movies));
            const firstFour = movies.slice(0, scrollByFour);
            currentIndex += 4;
            state.movieslist = firstFour;
        })
    }
    //function for scrolling right
    const scrollRight = () => {
        const rightBtn = document.querySelector(view.domStr.nextbutton);
        const leftBtn = document.querySelector(view.domStr.prevbutton);
        rightBtn.addEventListener("click", (event) => {
            leftBtn.hidden = false;

            model.getMovies().then(movies => {
                // console.log(Array.isArray(movies));
                if (movies.length - currentIndex < 4) {
                    const nextFour = movies.slice(movies.length - 4, movies.length);
                    state.movieslist = nextFour;
                    currentIndex += (movies.length - currentIndex);
                    rightBtn.hidden = true;
                }
                else {
                    const nextFour = movies.slice(currentIndex, currentIndex + 4);
                    currentIndex += 4;
                    state.movieslist = nextFour;
                }
            })
        });
    }
    //function for scrolling left
    const scrollLeft = () => {
        const rightBtn = document.querySelector(view.domStr.nextbutton);
        const leftBtn = document.querySelector(view.domStr.prevbutton);
        leftBtn.addEventListener("click", (event) => {
            rightBtn.hidden = false;

            model.getMovies().then(movies => {
                if ((currentIndex - 4) < 4) {
                    const prevFour = movies.slice(0, 4);
                    state.movieslist = prevFour;
                    currentIndex = 4;
                    leftBtn.hidden = true;
                }
                else {
                    const prevFour = movies.slice(currentIndex - 8, currentIndex - 4);
                    currentIndex -= 4;
                    state.movieslist = prevFour;
                }
            })
        });
    }
    const bootstrap = () => {
        init();
        scrollRight();
        scrollLeft();
    };

    return { bootstrap };
})(Model, View);

appController.bootstrap();