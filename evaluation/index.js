//API
const Api = (() =>{
    const getMovie = () =>
        fetch('http://localhost:3000/movies')
        .then(response => response.json())

    return{
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

    const render = (ele, tmp) =>{
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

    return{
        domStr,
        render,
        createTmp
    }

})();


//MODEL
const Model = ((api) => {
    const getMovie = api.getMovie;

    return{
        getMovie
    }


})(Api);

//CONTROLLER
const appController = ((model, view) => {

    const init  = () => {
        
        model.getMovie().then((movie) =>{
            const tmp = view.createTmp(movie);
            const movieShow = document.querySelector(view.domStr.movielist);
            view.render(movieShow, tmp);
            
            
        });

    }

    const rightBtn = document.querySelector(view.domStr.swipeRight);
    rightBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const content = document.querySelector(view.domStr.movielist);
        content.scrollLeft += 200;
    });

    const leftBtn = document.querySelector(view.domStr.swipeLeft);
    leftBtn.addEventListener("click", function(event) {
        const content = document.querySelector(view.domStr.movielist);
        content.scrollLeft -= 200;
        event.preventDefault();
    })


    return{init}

})(Model, View);

appController.init();