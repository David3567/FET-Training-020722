// ~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const movies = "movies"
    //fetch movie information -- GET request
    const getMovies = () => 
        fetch([baseUrl, movies].join("/")).then((response) => response.json());

    return {
        getMovies
    };
})();

// ~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~
const View = (() => {
    const domStr = {
        carousel: ".carousel",
        leftArrow: ".move-left",
        rightArrow: ".move-right",
        movie: "movie",
        movieClass: ".movie",
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    const createTmp = (arr) => {
        let tmp = "";
        //parse through the given array from the fetch request
        arr.forEach((movie) => {
            tmp += `
                <div class="movie">
                    <img class="movie-image" src="${movie.imgUrl}">
                    <div class="movie-title">Movie: ${movie.title}</div>
                    <div class="movie-info">Info: ${movie.updateInfo}</div>
                </div>
            `
        });
        return tmp;
    };

    return {
        domStr,
        render,
        createTmp
    };
})();

// ~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~
const Model = ((api, view) => {
    //Class to store the information from the fetch request
    class State {
        //global variable
        #movieList = []; 

        //getter and setter for the carousel
        get movieList() {
            return this.#movieList;
        };

        set movieList(newMovieList) {
            this.#movieList = newMovieList;
            // rerender
            const tmp = view.createTmp(this.#movieList);
            const movieList = document.querySelector(view.domStr.carousel);
            view.render(movieList, tmp);
        };
    };

    const getMovies = api.getMovies;

    return {
        getMovies,
        State
    };

})(Api, View);

// ~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~
const Controller = ((model, view) => {
    const state = new model.State();
    const left = document.querySelector(view.domStr.leftArrow);
    const right = document.querySelector(view.domStr.rightArrow);
    const carousel = document.querySelector(view.domStr.carousel);

    //unassigned variables we will later change with setTimeout to update information from the task queue in the event loop
    let slides;
    let totalSlides;
    let slidePosition = 0;
    let margin = 0;
    
    //dynamically acquires the total length of the HTML collection from the GET request
    setTimeout(() => {
        slides = document.getElementsByClassName(view.domStr.movie);
        totalSlides = slides.length;
        updateSlidePosition(slidePosition);
    }, 400);

    //a basic next slide function that manipulates margins and visibility
    const moveRight = () => {
        right.addEventListener("click", (event) => {
            margin -= 170;
            carousel.style.marginLeft = `${margin}px`
            left.style.display = "block"
            slidePosition++;
            updateSlidePosition(slidePosition)

            //it is important to keep this if statement on the bottom so it will complete all its tasks 
            //and then the arrow dissapears if its at the last slide.
            if (slidePosition === (totalSlides - 4)) {
                right.style.display = "none";
                return;
            };
        });
    };

    //previous slide function
    const moveLeft = () => {
        left.addEventListener("click", (event) => {
            margin += 170;
            carousel.style.marginLeft = `${margin}px`
            right.style.display = "block"
            slidePosition--;
            updateSlidePosition(slidePosition)
            if (slidePosition === 0) {
                left.style.display = "none";
                return;
            };
        });
    };

    //updates the current 4 slides to be displayed.
    const updateSlidePosition = (startingIndex) => {
        //turns the html collection into an array to be able to assign an index
        Array.from(slides).forEach((movie, i) => {
            //if 4 is passed in, the visible slides will be 4, 5, 6, and 7
            if ((i >= startingIndex) && (i <= (startingIndex + 3))) {
                movie.style.visibility = "visible"
            } else {
                movie.style.visibility = "hidden"
            }
        });
    };

    // send the fetch request and assign it into our state with our getter and setter
    const init = () => {
        model.getMovies().then((movies) => {
            state.movieList = movies;
        });
    };

    //call all necessary functions to start the application
    const bootstrap = () => {
        init();
        moveLeft();
        moveRight();
    };

    return {
        bootstrap
    };
})(Model, View);

Controller.bootstrap();
