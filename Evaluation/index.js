// ~~~~~~~~~~~~Api~~~~~~~~~~~~~~
const Api = (() => {
  const baseUrl = "http://localhost:3000/movies";

  const getMovies = () =>
      fetch(baseUrl).then((response) => response.json());

  return {
      getMovies,
  };
})();
// ~~~~~~~~~~~~View~~~~~~~~~~~~~~
const View = (() => {
  const domStr = {
      movielist: ".track",
  };
  const render = (ele, tmp) => {
      ele.innerHTML = tmp;
  };
  const createTmp = (arr) => {
      let tmp = "";
      arr.forEach((movie) => {
          tmp += `
            <div class="card-container">
              <div class="card card${movie.id}"><img src="${movie.imgUrl}"></div>
            </div>
          `;
      });
      return tmp;
  };

  return {
      domStr,
      render,
      createTmp,
  };
})();

// ~~~~~~~~~~~~Model~~~~~~~~~~~~~~
const Model = ((api, view) => {
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

  return {
      getMovies,
      State,
  };
})(Api, View);

// ~~~~~~~~~~~~Controller~~~~~~~~~~~~~~
const appController = ((model, view) => {
  const state = new model.State();
  const movielist = document.querySelector(view.domStr.movielist);

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

appController.bootstrap();