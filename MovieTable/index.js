var left = 1;
var size = 0;
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
// ~~~~~~~~~~~~Api~~~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const movie = "movies";
    const getMovies = () =>
        fetch([baseUrl, movie].join("/")).then((response) => response.json()); 
    return {
        getMovies,
    };

})();

// ~~~~~~~~~~~~View~~~~~~~~~~~~~~
const View = (() => {
    const domStr = {
        movielist: ".movielist",
        movie: ".movie-container",
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => { 
        let tmp = "";
        size = arr.length;
        arr.forEach((movie) => {
            tmp += `
                    <div class = "movie-container" id = "${movie.id}">
                    <img src = "${movie.imgUrl}">
                    <p>${movie.title}</p>
                    <p>${movie.updateInfo}</p> 
                    </div>              
            `;
        });
        return tmp;
    };

    const show = (left) => {
       let arrowLeft = document.getElementById("arrow-left");
       let arrowRight = document.getElementById("arrow-right");
       if(left === 1) {
          arrowLeft.style.display = "none";
       } else {
          arrowLeft.style.display = "block";
       }

       if(left === size - 3) {
        arrowRight.style.display = "none";
       } else {
        arrowRight.style.display = "block";
       }

       for ( let i = 1; i <= size; i++) 
       {
        let ele = document.getElementById(i);
           if ( i >= left && i < left + 4)
           { 
            ele.style.display = "block"; 
           } else {
            ele.style.display = "none"; 
           }
           
       };
    
    }

    return {
        domStr,
        render,
        createTmp,
        show,
    };
})();

// ~~~~~~~~~~~~Model~~~~~~~~~~~~~~
const Model = ((api, view) => {
    class Movie {
        constructor(title) {
            this.userId = 2;
            this.title = title;
            this.completed = false;
        }
    }

    class State {
        #movielist = [];

        get movielist() {
            return this.#movielist;
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
    const rightClick = api.clickRight;
    const leftClick = api.clickLeft;

    return {
        getMovies,
        rightClick,
        leftClick,
        State,
        Movie,
    };
})(Api, View);

// ~~~~~~~~~~~~Controller~~~~~~~~~~~~~~
const appController = ((model, view) => {
    const state = new model.State();
    const movielist = document.querySelector(view.domStr.movielist);
    const clickRight = () => {
        arrowRight.addEventListener("click", function () {
            if(left <= size) 
            {
                left++;
            }
            View.show(left);
        });
    }   
    const clickLeft = () => {
        arrowLeft.addEventListener("click", function () {
            if(left > 0) 
            {
                left--;
            }
            View.show(left);
        });

    }   

    const init = () => {
        model.getMovies().then((movies) => {
            state.movielist = movies;
        });
    };

    const bootstrap = () => {
        init();
        clickRight();
        clickLeft();
    };

    return { bootstrap };
})(Model, View);

appController.bootstrap();


