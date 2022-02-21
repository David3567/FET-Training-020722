const Api = (() => {
  const baseUrl = "http://localhost:3000/movies";
  //id, imgUrl, title, updateInfo

  const getMovies = () => fetch(baseUrl).then((response) => response.json());
  return { getMovies };
})();

const View = (() => {
  const slideIndex = 1;
  //const slideShowContainer;

  // hiide left/right button depending on the end or start of movie list

  const showLeftBtn = () => {
    let tmp = "";

    return tmp;
  }

  const showRightBtn = () => {
    let tmp = "";
    return tmp;
  }

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
      console.log(movie);
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


  const shiftLeft = () => {
    State.movieIndex --;
  }

  const shiftRight = () => {
    State.movieIndex ++;
  }

  class State {
    #movieList = [];
    #movieIndex = 0;
    get movieList() {
      return this.#movieList;
    }

    get movieIndex() {
      return this.#movieIndex;
    }

    set movieIndex(newIndex) {
      this.#movieIndex = newIndex;
      console.log(this.#movieIndex)
      // hide left
      if(newIndex === 0){
        const rightBtn = document.querySelector(view.domStr.leftBtn)
        view.render(rightBtn, "");
      // hide right
      }else if(newIndex === 8){
        const leftBtn = document.querySelector(view.domStr.rightBtn)
        view.render(leftBtn, "");
      }else {
        console.log('here')
        const leftBtn = document.querySelector(view.domStr.rightBtn)
        view.render(leftBtn, "CLICK");
        const rightBtn = document.querySelector(view.domStr.rightBtn)
        view.render(rightBtn, "&#10095;");
      }
    }

    set movieList(newMovies) {
      console.log(newMovies)
      console.log("movieIndex: ", this.#movieIndex);
      this.#movieList = newMovies.slice(this.#movieIndex, this.#movieIndex + 4)
      const tmp = view.createTemp(this.#movieList);
      const movieList = document.querySelector(view.domStr.movieList);
      view.render(movieList, tmp);
    }
  }

  const getMovies = api.getMovies;

  return {
    Movie,
    State,
    getMovies, 
    shiftLeft, 
    shiftRight
  }
})(Api, View);

const Controller = ((model, view) => {
  const state = new model.State();
  const leftBtn = document.querySelector(view.domStr.leftBtn);
  const rightBtn = document.querySelector(view.domStr.rightBtn);
  const movieList = document.querySelector(view.domStr.movieList);


  const shiftLeft = () => {
    leftBtn.addEventListener("click", (event) => {
      model.shiftLeft(state.movieIndex);
      state.movieIndex = state.movieIndex - 1;
      state.movieList = state.movieList;
      console.log(state.movieIndex)
    })
  }

  const shiftRight = () =>{
    rightBtn.addEventListener("click", (event) => {
      model.shiftRight(state.movieIndex);
      state.movieIndex = state.movieIndex + 1;
      console.log(state.movieIndex)
    })
  }
  const init = () => {
    model.getMovies().then((movies) => {
      state.movieIndex = 0;
      state.movieList = movies;
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