const Api = (() => {
    const url = "http://localhost:3000";
    const dir = "movies";

    const getMovie = () => {
        return fetch(url.concat('/',dir))
        .then(response => response.json())
        .catch(error => error.json());
    }

    return {
        getMovie
    }
})();

console.log(Api);

const View = (() => {
    const domElement = {
        movie: ".movie-holder",
        leftbtn: ".move-left",
        rightbtn: ".move-right"
    }

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }

    const createMovieData = (arr) => {
        let info = "";
        arr.forEach((element) => {
            info += `
                <div class="movie-container id=${element.id}">
                    <img src="${element.imgUrl}" alt="movie title art">
                    <p class="title">Movie: ${element.title}</p>
                    <p class="detail">Info: ${element.updateInfo}</p>
                </div>
            `
        });
        return info;
    }

    return {
        domElement,
        render,
        createMovieData
    }
})();

const Model = ((api, view) => {
    class State {
        #movieList = [];
        #displayList=[];
        #begin = 0;
        #end = 3;

        get movieList() {
            return this.#movieList;
        }set movieList(newMovie) {
            this.#movieList = newMovie;
            const moviex = document.querySelector(view.domElement.movie); //reference html element
            const tmp = view.createMovieData(this.#movieList) //add new html script to existing array
            view.render(moviex,tmp);
        }

        get displayList() {
            return this.#movieList;
        }set displayList(newMovie) {
            this.#displayList = newMovie;
            const moviex = document.querySelector(view.domElement.movie); //reference html element
            const tmp = view.createMovieData(this.#displayList) //add new html script to existing array
            view.render(moviex,tmp);
        }

        get begin() {
            return this.#begin;
        }set begin(newBegin) {
            this.#begin = newBegin;
        }

        get end() {
            return this.#end;
        }set end(newEnd) {
            this.#end = newEnd;
        }
    }

    const getMovie = api.getMovie;

    return {
        getMovie,
        State
    }
})(Api, View);

const Controller = ((model, view) => {
    const state = new model.State();
    const leftBtn = document.querySelector(view.domElement.leftbtn);
    const rightBtn = document.querySelector(view.domElement.rightbtn);
    let begin = state.begin;
    let end = state.end;

    
    const moveLeftBtn = () => {
        leftBtn.style.visibility="hidden";
        
        leftBtn.addEventListener("click", () => {
            begin--;
            end--;
            console.log(begin, end);

            if (begin === 0) {
                leftBtn.style.visibility="hidden";
            }else{
                rightBtn.style.visibility="visible";
            }

            const subarr = state.movieList.slice(begin,end + 1);
            state.displayList = subarr;
        })
    }

    const moveRightBtn = () => {

        rightBtn.addEventListener("click", () => {
            begin++;
            end++;
            console.log(begin, end);

            if (end === state.movieList.length - 1) {
                rightBtn.style.visibility="hidden";
            }else{
                leftBtn.style.visibility="visible";
            }

            const subarr = state.movieList.slice(begin,end + 1);
            state.displayList = subarr;
        })
    }

    const init = () => {
        model.getMovie().then((movieList) => {
            state.movieList = movieList;
        });
    }
    
    const bootstrap = () => {
        init();
        moveLeftBtn();
        moveRightBtn();
    }

    return { bootstrap }

})(Model, View);

Controller.bootstrap();
