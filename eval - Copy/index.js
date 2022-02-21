// ~~~~~~~~~~~~Api~~~~~~~~~~~~~~
const Api = (() => {
     const baseUrl = "https://jsonplaceholder.typicode.com";
   // const baseUrl = "http://localhost:3000";
    const todo = "todos";
    const movie = "movies";

    const getTodos = () =>
        fetch([baseUrl, todo].join("/")).then((response) => response.json());

    const baseUrl_movies = "http://localhost:3000";

    const getMovies = () => 
        fetch([baseUrl_movies, movie].join("/")).then((response) => response.json());

        // console.log( "Came in get movies   "  + [baseUrl_movies, movie].join("/") );
        


    const Next = ( id ) => {
        console.log( "Next" )
    }

    const Back = (id  ) => {
        console.log( "Back" )
    }

    const deleteTodo = (id) => {
        console.log(id);
        fetch([baseUrl, todo, id].join("/"), {
            method: "DELETE",
        });
    }

    const addTodo = (newtodo) =>
        fetch([baseUrl, todo].join("/"), {
            method: "POST",
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json());

    return {
        getTodos,
        getMovies,

        deleteTodo,
        addTodo,
        Next,
        Back,
    };
})();
// ~~~~~~~~~~~~View~~~~~~~~~~~~~~
const View = (() => {
    const domStr = {
        todolist: ".todolist-container",
        deletebtn: ".delete-btn",
        todoinput: ".todolist-input",
    };

    const domStr2 = {
        movielist: ".movielist-container",
        nextbtn: ".next-btn",
        backbtn: ".back-btn",
    };

    const render = (ele, tmp) => {
        //ele.innerHTML = tmp;
        //console.log( "Render todo " + tmp );
    };

    const renderMovie = (ele, tmp) => {
        ele.innerHTML = tmp;
        //console.log( "Render Movie " + tmp );
    };

    const createTmp = (arr) => {
        let tmp = "";
        
        arr.forEach((todo) => {
            tmp += `
                <li>
                    <span>${todo.id}-${todo.title}</span>
                    <img src =  "https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2021-12/Untitled%20design%20%2821%29_2.png?itok=w_EnPK-m"  />
                    <button class="delete-btn" id="${todo.id}">X</button>
                </li>
            `;
            //console.log( todo );
        });
        return tmp;
    };

    const createMovie = (arr , start ) => {
        let  count = 0;
        let tmp = "";
        arr.forEach( (movie) => {

            if(  ( count >= start ) && (  count < (start+4) )  ){
                tmp += `<div style="float:left; padding:10px; " >
                <img id="${movie.id}"  src =  "${movie.imgUrl}"  />
                <h2> ${movie.title} </h2>
                <h2 style="width:330px" > ${movie.updateInfo} </h2>
                </div>
                `;
            }
            count +=1;

           
            //console.log( movie );
        });
        return tmp + '       <input type="hidden" id="start" name="start" value="'+start+'"> ' ;
    };

    return {
        domStr,
        domStr2,
        render,
        renderMovie,
        createTmp,
        createMovie,
    };
})();

// ~~~~~~~~~~~~Model~~~~~~~~~~~~~~
const Model = ((api, view) => {
    class Todo {
        constructor(title) {
            this.userId = 2;
            this.title = title;
            this.completed = false;
        }
    }

    class Movie {
        constructor( id , title , imgUrl , updateInfo ) {
            this.id = id;
            this.title = title;
            this.imgUrl = imgUrl;
            this.updateInfo = updateInfo;
        }
    }

    class State {
        #todolist = [];

        get todolist() {
            return this.#todolist;
        }
        set todolist(newtodos) {
            this.#todolist = newtodos;
            // rerender the page;
            const tmp = view.createTmp(this.#todolist);
            const todolist = document.querySelector(view.domStr.todolist);
            view.render(todolist, tmp);
        }
    }

    class State2 {
        #movielist = [];

        get movielist() {
            return this.#movielist;
        }
        set movielist( newmovies ) {
            //console.log( "Setting movielist" );
            
            this.#movielist = newmovies;
            // rerender the page;
            const tmp = view.createMovie(this.#movielist , 0 );
            const movielist = document.querySelector(view.domStr2.movielist);
            view.renderMovie(movielist, tmp);

        }
    }

    const getTodos = api.getTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    const getMovies = api.getMovies;
    const Next = api.Next;
    const Back = api.Back;


    return {
        getTodos,
        deleteTodo,
        addTodo,

        getMovies,
        Next,
        Back,

        State,
        Todo,

        Movie,
        State2,
    };
})(Api, View);

// ~~~~~~~~~~~~Controller~~~~~~~~~~~~~~
const appController = ( (model, view) => {
    const state = new model.State();
    const todolist = document.querySelector(view.domStr.todolist);

    const state2 = new model.State2();
    const movielist = document.querySelector(view.domStr2.movielist);
    let nextbtn = document.querySelector(view.domStr2.nextbtn);
    let backbtn = document.querySelector(view.domStr2.backbtn);

    let id = 0;


    const Next = () => {
        
        nextbtn.addEventListener("click", (event) => {
           console.log( "Clicked on Next " +  document.getElementById( "start" ).value  );
            
           console.log( "length " + state2.movielist.length  )
        
            let start = parseInt( document.getElementById( "start" ).value );


            if ( (start+5) === state2.movielist.length )
            {
                nextbtn.style.display =  "none";
            }
            backbtn.style.display =  "block";


           const tmp = view.createMovie(state2.movielist , start + 1 );
           const movielist = document.querySelector(view.domStr2.movielist);
           view.renderMovie(movielist, tmp);

        });
    };

    const Back = () => {

        
        backbtn.style.display =  "none";

        
        backbtn.addEventListener("click", (event) => {

            console.log( "Clicked on back " +  document.getElementById( "start" ).value  );


            let start = parseInt( document.getElementById( "start" ).value );


            if ( start === 1 )
            {
                backbtn.style.display =  "none";
            }
            nextbtn.style.display =  "block";

           const tmp = view.createMovie(state2.movielist , start - 1 );
           const movielist = document.querySelector(view.domStr2.movielist);
           view.renderMovie(movielist, tmp);
        });
    };

    

    // const deleteTodo = () => {
    //     todolist.addEventListener("click", (event) => {
    //         state.todolist = state.todolist.filter(
    //             (todo) => +todo.id !== +event.target.id
    //         );

    //         model.deleteTodo(event.target.id);
    //     });
    // };

    // const addTodo = () => {
    //     // const todo = new model.Todo();
    //     const input = document.querySelector(view.domStr.todoinput);
    //     input.addEventListener("keyup", (event) => {
    //         if (event.key === "Enter" && event.target.value !== "") {
    //             const todo = new model.Todo(event.target.value);
    //             model.addTodo(todo).then((todo) => {
    //                 state.todolist = [todo, ...state.todolist];
    //             });
    //             event.target.value = "";
    //         }
    //     });
    // };

    const init = () => {
        // model.getTodos().then((todos) => {
        //     state.todolist = todos;

        //     //console.log( todos );

        // });

        model.getMovies().then( (movies) => {
            state2.movielist = movies;
            //console.log( movies )
        });
    };
    const bootstrap = () => {

        init();
        Next();
        Back();
        // deleteTodo();
        // addTodo();
    };

    return { bootstrap };
})(Model, View);

appController.bootstrap();