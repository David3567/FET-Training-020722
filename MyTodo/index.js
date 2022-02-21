// ~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const todo = "todos";

    const getTodos = () => 
        fetch([baseUrl, todo].join('/'))
        .then(response => response.json())

    return { getTodos }
})();

// ~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~
const View = (() => {
    const domStr = {
        todolist: ".todolist-container",
        deletebtn: ".delete-btn",
        todoinput: ".todolist-input"
    }

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `
                <li>
                    <span>${todo.title}</span>
                    <button class="delete-btn" id="${todo.id}">X</button>
                </li>
            `
        });
        return tmp;
    }

    return {
        domStr,
        render,
        createTmp
    }
})();

// ~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~
const Model = ((api, view) => {
    class State {
        #todolist = []; 

        get todolist() {
            return this.#todolist;
        }

        set todolist(newtodos) {
            this.#todolist = newtodos;
            //rerender the page;
            const todolist = document.querySelector(view.domStr.todolist);
            const tmp = view.createTmp(this.#todolist);
            view.render(todolist, tmp)
        }
    }

    const getTodos = api.getTodos;

    return { 
        getTodos,
        State
    }
})(Api, View);

// ~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~
const appController = ((model, view) => {
    const state = new model.State();
    // const todolist = document.querySelector(view.domStr.todolist);

    const init = () => {
        console.log("controller: ", model.getTodos())
        model.getTodos().then((todos) => {
            console.log("controller: ", todos)
            state.todolist = todos;
        })
    }

    const bootstrap = () => {
        init();
    }

    return { bootstrap }
})(Model, View);

appController.bootstrap();
