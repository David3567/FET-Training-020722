const Api = (() => {
  const baseUrl = "http://localhost:3000/movies";
  //id, imgUrl, title, updateInfo

  const getMovies = () => fetch(baseUrl).then((response) => response.json());
  return { getMovies };
})();

const View = (() => {

  const domStr = {
    container: ".movie-container",
    movieList: ".movie-holder",
    leftBtn: ".move-left",
    rightBtn: ".move-right"
  }

  const render = (ele, temp) => {
    ele.innerHTML = temp;
  }

  const createTemp = (arr) => {
    let tmp = "";
    arr.forEach((movie) => {
      tmp += `
      <div class="grid-movie">
        <img src=${movie.imgUrl} style="width:100%" alt=${movie.title}/>
        <div class="text">
          <p id="title">Movie: ${movie.title} </p>
          <p id="info">Info: ${movie.updateInfo}</p>
        </div>
      </div>
      `
    })
    return tmp;
  };

  return {
    domStr, render, createTemp
  }

})();

const Model = ((api, view) => {
  class Movie {
    constructor(movie) {
      this.id = movie.id;
      this.imgUrl = movie.imgUrl;
      this.title = movie.title;
      this.updateInfo = movie.updateInfo
    }
  }

  class State {
    #movieList = [];
    #index = 0;
    get movieList() {
      return this.#movieList;
    }

    set movieList(newMovies) {
      this.#movieList = newMovies;
      // rerender the page;
      const tmp = view.createTemp(this.#movieList);
      const movieList = document.querySelector(view.domStr.movieList);
      view.render(movieList, tmp);
    }

    get index() {
      return this.#index;
    }

    set index(newIndex) {
      this.#index = newIndex;
    }
  }

  const getMovies = api.getMovies;

  return {
    Movie,
    State,
    getMovies
  }
})(Api, View);

const Controller = ((model, view) => {
  const state = new model.State();
  const movieHolder = document.querySelector(view.domStr.movieList);
  const leftBtn = document.querySelector(view.domStr.leftBtn);
  const rightBtn = document.querySelector(view.domStr.rightBtn);
  const movieList = document.querySelector(view.domStr.movieList);

  const shiftLeft = () => {
    leftBtn.addEventListener("click", (event) => {
      state.index--;
      showMovies();
    })
  }

  const shiftRight = () => {
    rightBtn.addEventListener("click", (event) => {
      state.index++;
      showMovies();
    })
  };

  const showMovies = () => {
    let tmp = view.createTemp(state.movieList.slice(state.index, state.index + 4));
    console.log(state.index)
    console.log(tmp)
    view.render(movieHolder, tmp);
    leftBtn.style.visibility = state.index === 0 ? "hidden" : "visible";
    rightBtn.style.visibility = state.index + 4 === state.movieList.length ? "hidden" : "visible";
  };

  const init = () => {
    model.getMovies().then((movies) => {
      state.movieIndex = 0;
      state.movieList = movies;
      showMovies();
    });
  };

  const bootstrap = () => {
    init();
    shiftLeft();
    shiftRight();
  };


  return { bootstrap };
})(Model, View);

Controller.bootstrap();