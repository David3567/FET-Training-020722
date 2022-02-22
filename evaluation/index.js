//API
const Api = (() => {
    const getMovie = () =>
        fetch('http://localhost:3000/movies')
            .then(response => response.json())

    return {
        getMovie
    }
})();

Api.getMovie();


//VIEW
const View = (() => {
    const domStr = {
        movielist: ".movie-holder",
        swipeRight: ".move-right",
        swipeLeft: ".move-left"
    }

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach(movie => {
            tmp += `
                <div>
                    <div><img src = ${movie.imgUrl}></div>
                    <div>${movie.title}</div>
                    <div>${movie.updateInfo}</div>
                </div>

            `;

        });
        return tmp;
    }

    return {
        domStr,
        render,
        createTmp
    }

})();


//MODEL
const Model = ((api, view) => {
    class State {
        #movielist = [];

        get movielist(){
            return this.#movielist;
        }

        set movielist(newMovie){
            this.#movielist = newMovie;

            const tmp = view.createTmp(this.#movielist);
            const movielist = document.querySelector(view.domStr.movielist);
            view.render(movielist, tmp);
        }
    };

    

    const getMovie = api.getMovie;

    return {
        State,
        getMovie
    }


})(Api, View);

//CONTROLLER
const appController = ((model, view) => {
    const state = new model.State();
    const movielist = document.querySelector(view.domStr.movielist);

    const init = () => {

        model.getMovie().then((movie) => {
            state.movielist = movie;

        });

    }


    let startIdx  = 0;
    
    const rightBtn = document.querySelector(view.domStr.swipeRight);
    const leftBtn = document.querySelector(view.domStr.swipeLeft);
    const moveRight = () =>{

        rightBtn.addEventListener("click", function (event) {
            const content = document.querySelector(view.domStr.movielist);
            content.scrollLeft += 205;
            startIdx++;
           
        });

     }   
     
     
    const moveLeft = () =>{

        leftBtn.addEventListener("click", function (event) {
            const content = document.querySelector(view.domStr.movielist);
            content.scrollLeft -= 205;
            startIdx--;
        });
    }

    

    

    const bootstrap = () => {
        init();
        moveRight();
        moveLeft();
    }

    return { bootstrap}

}) (Model, View);

appController.bootstrap();