// ~~~~~~~~~~~~Api~~~~~~~~~~~~~~
const Api = (() => {
    
    const movie = "movies";

    const baseUrl_movies = "http://localhost:3000";

    const getMovies = () => 
        fetch([baseUrl_movies, movie].join("/")).then((response) => response.json());


    const Next = ( id ) => {
        console.log( "Next" )
    }

    const Back = (id  ) => {
        console.log( "Back" )
    }

   
    return {
        
        getMovies,
        Next,
        Back,
    };
})();
// ~~~~~~~~~~~~View~~~~~~~~~~~~~~
const View = (() => {
   
    const domStr2 = {
        movielist: ".movielist-container",
        nextbtn: ".next-btn",
        backbtn: ".back-btn",
    };

    

    const renderMovie = (ele, tmp) => {
        ele.innerHTML = tmp;
        //console.log( "Render Movie " + tmp );
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
        domStr2,
        renderMovie,
        createMovie,
    };
})();

// ~~~~~~~~~~~~Model~~~~~~~~~~~~~~
const Model = ((api, view) => {
   

    class Movie {
        constructor( id , title , imgUrl , updateInfo ) {
            this.id = id;
            this.title = title;
            this.imgUrl = imgUrl;
            this.updateInfo = updateInfo;
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

    const getMovies = api.getMovies;
    const Next = api.Next;
    const Back = api.Back;


    return {
       

        getMovies,
        Next,
        Back,


        Movie,
        State2,
    };
})(Api, View);

// ~~~~~~~~~~~~Controller~~~~~~~~~~~~~~
const appController = ( (model, view) => {

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


    const init = () => {

        model.getMovies().then( (movies) => {
            state2.movielist = movies;
            //console.log( movies )
        });
    };
    const bootstrap = () => {

        init();
        Next();
        Back();
    
    };

    return { bootstrap };
})(Model, View);

appController.bootstrap();