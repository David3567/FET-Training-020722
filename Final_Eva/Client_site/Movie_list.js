const Api = (() => {
    const baseURL = "http://localhost:3000/movies"

    const getMovies = () => 
        fetch(baseURL).then((response) => response.json());

    return {getMovies};
    
})();

const View = (() => {
    const domStr = {
        movieHolder:".movie-holder",
        buttons:"button",
        left:".move-left",
        right:".move-right",
        movieContainer:"#container"
    }

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }

    const createTmp = (arr) => {
        let temp = "";
        let flag = true;
        arr.forEach((element) => {
            if (flag === true) {
                temp += `
            <div class="movie-container1" id="container">
                <img src="${element.imgUrl}"></img>
                <ul>
                    <li>Movie: ${element.title}</li>
                    <li>Info: ${element.updateInfo}</li>
                </ul>
            </div>
            `;

            flag = false
            }
            else {
                temp += `
            <div class="movie-container2" id="container">
                <img src="${element.imgUrl}"></img>
                <ul>
                    <li>Movie: ${element.title}</li>
                    <li>Info: ${element.updateInfo}</li>
                </ul>
            </div>
            `;

            flag = true
            }
            
        });

        return temp;
    }

    return {
        domStr,
        render,
        createTmp
    };

})();

const Model = ((api, view) => {
    const getMovies = api.getMovies;

    return {
        getMovies
    };
})(Api, View);

const Controller = ((model, view) => {

    const init  = () => {
        model.getMovies().then(movies => {
            const temp = view.createTmp(movies);
            const movieHolder = document.querySelector(view.domStr.movieHolder)
            
            view.render(movieHolder, temp);
        });
    }

    const scroll = () => {
        const left_input = document.querySelector(view.domStr.left);
        const right_input = document.querySelector(view.domStr.right);
        const movieHolder = document.querySelector(view.domStr.movieHolder);
        
        right_input.style.visibility = 'hidden'

        let scrollCompleted = 0;

        let left_hidden = false, right_hidden = true;

        

        left_input.addEventListener("click", (event) => {
            console.log(movieHolder.scrollLeft)
            console.log("---------")
            if (0 <= scrollCompleted >= -405) {
                movieHolder.scrollLeft -= 81;
                scrollCompleted -= 81;
            };
            console.log(scrollCompleted)
            if (scrollCompleted < 0 || right_hidden) {
                right_hidden = false;
                right_input.style.visibility = 'visible';
            };
            if (scrollCompleted <= -405) {
                left_hidden = true;
                left_input.style.visibility = 'hidden';
            };
        });

        right_input.addEventListener("click", (event) => {
            console.log(movieHolder.scrollLeft)
            console.log("---------")
            if (0 <= scrollCompleted >= -405) {
                movieHolder.scrollLeft += 81;
                scrollCompleted += 81;
            };
            console.log(scrollCompleted)
            if (scrollCompleted >-405 || left_hidden) {
                left_hidden = false;
                left_input.style.visibility = 'visible';
            };
            if (scrollCompleted >= 0) {
                right_hidden = true;
                right_input.style.visibility = 'hidden';
            };
        });

    }

    const bootstrap = () => {
        init();
        scroll();
    };

    return {bootstrap};
})(Model, View);


Controller.bootstrap();