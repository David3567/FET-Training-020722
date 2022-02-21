const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const movie = "movies";

    const getMovies = () =>
        fetch([baseUrl, movie].join("/")).then((response) => response.json());

    return {
        getMovies,
    };
})();


const View = (() => {
    const domStr = {
        movielist: ".movie-holder",
        movie: ".movie.container",
        rightbn: ".move-right",
        leftbn: ".move-left"
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
                </div>
            `;
        });
        return tmp;
    };
    const show = (focus, viewnum) => {
        for (let i = focus; i < focus + viewnum; i++) {
            let ele = document.getElementById(i);
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

    class State {
        #movielist = [];

        get movielist() {
            return this.#movielist;
        }
        set movielist(newmovie) {
            this.#movielist = newmovie;
            const tmp = View.createTmp(this.#movielist);
            const movielist = document.querySelector(View.domStr.movielist);
            View.render(movielist, tmp);
        }
    }

    const getMovies = Api.getMovies;

    return {
        getMovies,
        State,
    };
})(Api, View);


const appController = ((Model, View) => {
    const state = new Model.State();
    const leftbn = document.querySelector(View.domStr.leftbn);
    const rightbn = document.querySelector(View.domStr.rightbn);

    let viewnum = 4;
    let focus = 1;

    const leftMove = () => {
        leftbn.addEventListener("click", (event) => {
            let ele = document.getElementById(focus + viewnum - 1);
            ele.style.display = "none";
            focus--;
            if (focus <= 0) {
                focus = 1;
            }
            View.show(focus, viewnum);
            rightbn.style.display = "block"
            if (focus === 1) {
                leftbn.style.display = "none";

            } else {
                leftbn.style.display = "block";
            }
        })
    };

    const rightMove = () => {
        rightbn.addEventListener("click", (event) => {
            let ele = document.getElementById(focus);
            ele.style.display = "none";
            focus++;
            if (focus > state.movielist.length - viewnum + 1) {
                focus = state.movielist.length - viewnum + 1;
            }
            View.show(focus, viewnum);
            leftbn.style.display = "block";
            if (focus === state.movielist.length - viewnum + 1) {
                rightbn.style.display = "none";
            } else {
                rightbn.style.display = "block";
            }
        })
    };

    const init = () => {
        Model.getMovies().then((movies) => {
            state.movielist = movies;
            if(state.movielist.length <= viewnum){
                viewnum = state.movielist.length;
                leftbn.style.display = "none";
                rightbn.style.display = "none";
            }
            View.show(focus, viewnum);
        });
        
    };

    const bootstrap = () => {
        init();
        leftMove();
        rightMove();
    };

    return {
        bootstrap
    };
})(Model, View);

appController.bootstrap();