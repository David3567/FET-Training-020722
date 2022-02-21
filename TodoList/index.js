// ~~~~~~~~~~~~Api~~~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    // const baseUrl = "http://localhost:3000";
    const todo = "todos";

    const getTodos = () =>
        fetch([baseUrl, todo].join("/")).then((response) => response.json());

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
        deleteTodo,
        addTodo,
    };
})();
// ~~~~~~~~~~~~View~~~~~~~~~~~~~~
const View = (() => {
    const domStr = {
        todolist: ".todolist-container",
        deletebtn: ".delete-btn",
        todoinput: ".todolist-input",
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `
                <li>
                    <span>${todo.title}</span>
                    <button class="delete-btn" id="${todo.id}">X</button>
                </li>
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
    class Todo {
        constructor(title) {
            this.userId = 2;
            this.title = title;
            this.completed = false;
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

    const getTodos = api.getTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    return {
        getTodos,
        deleteTodo,
        addTodo,
        State,
        Todo,
    };
})(Api, View);

// ~~~~~~~~~~~~Controller~~~~~~~~~~~~~~
const appController = ((model, view) => {
    const state = new model.State();
    const todolist = document.querySelector(view.domStr.todolist);

    let id = 0;

    const deleteTodo = () => {
        todolist.addEventListener("click", (event) => {
            state.todolist = state.todolist.filter(
                (todo) => +todo.id !== +event.target.id
            );

            model.deleteTodo(event.target.id);
        });
    };

    const addTodo = () => {
        // const todo = new model.Todo();
        const input = document.querySelector(view.domStr.todoinput);
        input.addEventListener("keyup", (event) => {
            if (event.key === "Enter" && event.target.value !== "") {
                const todo = new model.Todo(event.target.value);
                model.addTodo(todo).then((todo) => console.log("return fetch: ", todo));
                model.addTodo(todo).then((todo) => {
                    state.todolist = [todo, ...state.todolist];
                });
                event.target.value = "";
            }
        });
    };

    const init = () => {
        model.getTodos().then((todos) => {
            state.todolist = todos;
        });
    };
    
    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
    };

    return { bootstrap };
})(Model, View);

appController.bootstrap();
