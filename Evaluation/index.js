const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const movie = "movies";

    const getMovies = () =>
        fetch([baseUrl, movie].join("/")).then((response) => response.json());

    const deleteMovies = (id) => {
        // console.log("id", id);
        fetch([baseUrl, movie, id].join("/"), {
            method: "DELETE",
        });
    }
    const addMovies = (newMovie) => {
        fetch([baseUrl, movie].join("/"), {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then((response) => response.json());
    }

    return {
        getMovies,
        deleteMovies,
        addMovies
    };
})();


const View = (() => {
    const domStr = {
        movielist: ".movie-holder",
        rightbn: ".move-right",
        leftbn: ".move-left",
        addform: ".add-movie-container",
        search: ".search"
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((movie) => {
            tmp += `
                <div class="movie-container" id ="${movie.id}">
                    <img src="${movie.imgUrl}">
                    <p>${movie.title}</p>
                    <p>${movie.updateInfo}</p>
                    <button class="delete-btn" name="${movie.id}">X</button>
                </div>
            `;
        });
        return tmp;
    };
    const show = (state, focus, viewnum) => {
        console.log("viewnum", viewnum);
        console.log(focus);
        console.log(state.movielist[0]);

        for (let i = focus; i < focus + viewnum; i++) {

            let ele = document.getElementById(state.movielist[i].id);
            // console.log(ele);
            ele.style.display = "block";
        }

    };

    return {
        domStr,
        render,
        createTmp,
        show
    };
})();

const Model = ((Api, View) => {
    class Movie {
        constructor(imgUrl, title, updateInfo) {
            this.id = NaN;
            this.imgUrl = imgUrl;
            this.title = title;
            this.updateInfo = updateInfo;
        }
    };

    class State {
        #movielist = [];
        #searchlist = [];
        get movielist() {
            return this.#movielist;
        }
        set movielist(newmovie) {
            this.#movielist = newmovie;
            const tmp = View.createTmp(this.#movielist);
            const movielist = document.querySelector(View.domStr.movielist);
            View.render(movielist, tmp);
        }
        get searchlist() {
            return this.#searchlist;
        }
        set searchlist(newmovie) {
            this.#searchlist = newmovie;
            // const tmp = View.createTmp(this.#searchlist);
            // const movielist = document.querySelector(View.domStr.movielist);
            // View.render(movielist, tmp);
        }
    }

    const getMovies = Api.getMovies;
    const deleteMovies = Api.deleteMovies;
    const addMovies = Api.addMovies;

    return {
        getMovies,
        State,
        Movie,
        deleteMovies,
        addMovies,
    };
})(Api, View);


const appController = ((Model, View) => {
    const state = new Model.State();
    const leftbn = document.querySelector(View.domStr.leftbn);
    const rightbn = document.querySelector(View.domStr.rightbn);
    const movielist = document.querySelector(View.domStr.movielist);
    const form = document.querySelector(View.domStr.addform);
    const search = document.querySelector(View.domStr.search);
    // console.log(state.movielist);
    let viewnum = 4;
    let focus = 0;

    const searchMovie = () => {
        search.addEventListener("keyup", (event) => {
            // console.log(event);
                state.searchlist = state.movielist.filter(
                    (search) => search.title.includes(event.target.value)
                );
                console.log("LISTEN", state.searchlist);
                focus = 0;

                
                if (state.searchlist.length < viewnum) {
                    viewnum = state.searchlist.length;
                }

                for (let i = focus; i < focus + viewnum; i++) {

                    let ele = document.getElementById(state.searchlist[i].id);
                    // console.log(ele);
                    ele.style.display = "block";
                }
        });
    };
    const leftMove = () => {
        leftbn.addEventListener("click", (event) => {
            let ele = document.getElementById(state.movielist[focus + viewnum - 1].id);
            ele.style.display = "none";
            focus--;
            focus = checkfocus(state, focus, viewnum).focus;
            viewnum = checkfocus(state, focus, viewnum).viewnum;
            View.show(state, focus, viewnum);
        })
    };

    const rightMove = () => {
        rightbn.addEventListener("click", (event) => {
            // console.log(focus);
            let ele = document.getElementById(state.movielist[focus].id);
            ele.style.display = "none";
            focus++;
            focus = checkfocus(state, focus, viewnum).focus;
            viewnum = checkfocus(state, focus, viewnum).viewnum;
            View.show(state, focus, viewnum);

        })
    };

    const deleteMovie = () => {
        movielist.addEventListener("click", (event) => {
            if (event.target.nodeName === "BUTTON") {
                console.log(`success deleted id ${event.target.name}.`);
                state.movielist = state.movielist.filter(
                    (movie) => +movie.id !== +event.target.name
                );
                Model.deleteMovies(event.target.name);
                focus = checkfocus(state, focus, viewnum).focus;
                viewnum = checkfocus(state, focus, viewnum).viewnum;
                View.show(state, focus, viewnum);
            }
        });
    };

    const addMovie = () => {
        form.addEventListener("submit", (event) => {
            let imgUrl = document.forms["add-movie"]["add-movie-img-url"].value;
            let title = document.forms["add-movie"]["add-movie-title"].value;
            let updateInfo = document.forms["add-movie"]["add-movie-updateInfo"].value;

            if (imgUrl != "" && title != "" && updateInfo != "") {
                const movie = new Model.Movie(imgUrl, title, updateInfo);
                Model.addMovies(movie).then((movie) => {
                    state.movielist = [...state.movielist, movie];
                })
                focus = checkfocus(state, focus, viewnum).focus;
                viewnum = checkfocus(state, focus, viewnum).viewnum;
                View.show(state, focus, viewnum);
            } else {
                event.preventDefault();
                alert("Please input all infos!");
            }

        });
    };

    const checkfocus = (state, focus, viewnum) => {
        if (state.movielist.length <= viewnum) {
            viewnum = state.movielist.length;
        }

        if (focus < 0) {
            focus = 0;
        }

        if (focus + viewnum > state.movielist.length) {
            focus = state.movielist.length - viewnum;
        }

        if (focus === 0) {
            leftbn.style.display = "none";
        } else {
            leftbn.style.display = "block";
        }

        if (focus + viewnum === state.movielist.length) {
            rightbn.style.display = "none";
        } else {
            rightbn.style.display = "block";
        }

        if (viewnum < 4) {
            movielist.style.justifyContent = "flex-start";
        }

        return {
            state,
            focus,
            viewnum
        };
    };

    const init = () => {
        Model.getMovies().then((movies) => {
            state.movielist = movies;
            focus = checkfocus(state, focus, viewnum).focus;
            viewnum = checkfocus(state, focus, viewnum).viewnum;
            View.show(state, focus, viewnum);
            console.log(state.movielist);

        });

    };

    const bootstrap = () => {
        init();
        leftMove();
        rightMove();
        deleteMovie();
        addMovie();
        searchMovie();
    };

    return {
        bootstrap
    };
})(Model, View);

appController.bootstrap();