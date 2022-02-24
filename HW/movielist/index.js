const API = (() => {
    const basurl = 'http://localhost:3000';
    const todoPath = 'movies';

    const getAllTodos = () =>
        fetch([basurl, todoPath].join('/'))
            .then(response => response.json());

    return {
        getAllTodos,
    }
})();

const View = (() => {
    const domString = {
        movieholder: '.movie-holder',
        todolistContainer: '.todolist-container',
        moveRight: '.move-right',
        moveLeft: '.move-left',

    }

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }

    const createTheTmp = arr => {
        let tmp = '';
        arr.forEach(ele => {
            tmp += ` <div class="movie-card">
            <img src='${ele.imgUrl}'>
            <p>${ele.title}</p>
            <span>${ele.updateInfo}</span>
            </div>`;
        });
        return tmp;
    }

    return {
        render,
        createTheTmp,
        domString,
    }
})();

const Model = ((api, view) => {
    //interface
    class Todo {
        constructor(title, updatedInfo) {
            // id does not care 
            this.updateInfo = updateInfo;
            this.title = title;

        }
    }
    class State {
        #todolist = [];
        constructor() { }
        // getter: to get the data
        get todolist() {
            return this.#todolist;

        }

        set todolist(newData) {
            this.#todolist = newData;
            const tmp = view.createTheTmp(this.#todolist);
            const element = document.querySelector(view.domString.todolistContainer);
            view.render(element, tmp);

        }
    }

    const getAllTodos = api.getAllTodos;

    return {
        getAllTodos,
        State,
        Todo,
    }
})(API, View);

const Controler = ((view, model) => {
    const state = new model.State();
    const moveLeftbtn = document.querySelector(view.domString.moveLeft);
    const moveRightbtn = document.querySelector(view.domString.moveRight);
    const container = document.querySelector(view.domString.todolistContainer);

    const initTodoList = () => {
        model.getAllTodos().then(todolist => {
            // transfering
            state.todolist = todolist;
            // console.log(typeof todolist);
        });
    }

    let location = 0; 
    let imageOffset = 0;
    const moveleft = () => {
        moveRightbtn.style.visibility = "hidden";  
        moveLeftbtn.addEventListener('click', event => {
            if (location > -5) {
                imageOffset -= 210;
                location -= 1;
                container.style.left = imageOffset + 'px';
                moveRightbtn.style.visibility = "visible";
            } else {
                moveLeftbtn.style.visibility = "hidden";
            }
        });
    }

    const moveright = () => {
        moveRightbtn.addEventListener('click', event => {
            if (location < 0) {
                imageOffset += 210;
                location += 1;
                container.style.left = imageOffset + 'px';
                moveLeftbtn.style.visibility = "visible";
            } else {
                moveRightbtn.style.visibility = "hidden";
            }
        });
    }
    
    const init = () => {
        initTodoList();
        moveleft();
        moveright();
    }

    return { init };

})(View, Model);

Controler.init();