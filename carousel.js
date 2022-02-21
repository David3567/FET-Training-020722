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
        movielist: ".movie-container",
        rightbtn: ".right-btn",
        leftbtn: ".left-btn",
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
  
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((movie) => {
            
              tmp += `
                  <ul class="movie" id=${movie.id}>
                    <li>
                        <img src="${movie.imgUrl}" alt="${movie.title}">
                     </li>
                     <li>
                        <span>${movie.title}</span>
                     </li>
                     <li>
                        <span>Info: ${movie.updateInfo}</span>
                    </li>
                  </ul>
              `;
            // console.log(tmp);
        });
        return tmp;
    };

    return {
        domStr,
        render,
        createTmp,
    };

})();

const Model = ((api, view) => {
    class Movie {
        constructor(title) {
            this.id = 1;
            this.imgUrl = imgUrl;
            this.title = title;
            this.info = info;
        }
    }

    class State {
        #movielist = [];
        #firstMovieID = 1;
        #lastMovieID = 4;

        get movielist() {
            return this.#movielist;
        }
      
        get firstMovieID() { // gets current first movie
          return this.#firstMovieID;
        }
        set firstMovieID(updatedFirst) { // update/set last movie ID w/ previous one in dataset
             this.#firstMovieID = updatedFirst;
        }
        get lastMovieID() { // get last movie ID
          return this.#lastMovieID;
        }
        set lastMovieID(updatedLast) { // update/set last movie ID w/ next one in dataset
             this.#lastMovieID = updatedLast;
        }
      
        set movielist(newmovies) {
            this.#movielist = newmovies;
            // rerender the page;
            const tmp = view.createTmp(this.#movielist);
            const movielist = document.querySelector(view.domStr.movielist);
            view.render(movielist, tmp);
        }
    }
  
    
    const getMovies = api.getMovies;

    return {
        getMovies,
        State,
        Movie,
    };
})(Api, View);

const Controller = ((model, view) => {
    const state = new model.State();
    const movielist = document.querySelector(view.domStr.movielist);
    
    const moveLeft = () => {
        const leftBtn = document.querySelector(".move-left");
        leftBtn.addEventListener("click", () => {
           // update firstMovieID, lastMovieID, rerender page
           // state.firstMovieID();
           // state.lastMovieID();
        });
    };
  
    const moveRight = () => {
        const rightBtn = document.querySelector(".move-right");
        rightBtn.addEventListener("click", () => {
           // update firstMovieID, lastMovieID, rerender page
           // state.firstMovieID();
           // state.lastMovieID();
        });
    };

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

Controller.bootstrap();