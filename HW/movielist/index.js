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
        constructor(title,updatedInfo) {
            // id does not care 
            this.updatedInfo = updatedInfo;
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
    

    const initTodoList = () => {
        model.getAllTodos().then(todolist => {
            // transfering
            state.todolist = todolist;
            // console.log(typeof todolist);
        });
    }

    const moveleft = () => {
        // const moveLeftbtn = document.querySelector(view.domString.moveLeft);
        
    }

    const init = () => {
        initTodoList();
    }

    return { init };

})(View, Model);

Controler.init();