const Api = (() => {
    const baseURL = "http://localhost:3000";
    const todo = "todos";
    const getTodo = () =>
        fetch([baseURL, todo].join("/")).then(response => response.json());

    const deleteTodo = (id) => {
        fetch([baseURL, todo, id].join("/"), {
            method: 'Delete'
        });
    };

    const addTodo = (newtodo) => {
        fetch([baseURL, todo].join("/"), {
            method: 'Post',
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then(response => response.json())
    };

    return {
        getTodo,
        deleteTodo,
        addTodo
    }
})();

const view = (() => {
    const domStr = {
        toDoList: '.todolist-container',
        inputbn: '.todolist-input',
        deletebn: '.delete-btn'
    };
    const createTmp = (arr) => {
        let tmp = '';
        arr.forEach(todo => {
            tmp += `
                <li>
                    <span>${todo.title}</span>
                    <button class="delete-btn" id="${todo.id}">X</button>
                </li>
            `;
        });
        return tmp;
    };
    const render = (ele, tmp) => {
        ele.innerHtml = tmp;
    }

    return {
        domStr,
        createTmp,
        render
    };
})();

const model = ((Api, view) => {

    class Todo {
        constructor(title) {
            this.title = title;
        }
    };
    class State {
        #todolist = [];
        get toDoList() {
            return this.#todolist;
        };
        set toDoList(newtodo) {
            this.#todolist = newtodo;

            const tmp = view.createTmp(this.#todolist);
            const todolist = document.querySelector(view.domStr.toDoList);
            view.render(todolist, tmp);
        };
    };
    const addTodo = Api.addTodo;
    const deleteTodo = Api.deleteTodo;
    const getTodo = Api.getTodo;

    return {
        Todo,
        State,
        addTodo,
        deleteTodo,
        getTodo
    };
})(Api, view);

const appControler = ((model, view) => {
    const state = new model.State();

    const addTodo = () => {
        const todolist = document.querySelector(view.domStr.inputbn);
        todolist.addEventListener("change", (event) => {
            if (event.target.value != '') {
                const todo = new model.Todo(event.target.value);
                model.addTodo(todo).then((todo) => {
                    state.toDoList = [todo, ...state.toDoList];
                })
                event.target.value = "";
            }
        });
    };


    const deleteTodo = () => {
        const deletetodo = document.querySelector(view.domStr.toDoList);
        deletetodo.addEventListener("click", (event) => {
            state.toDoList = state.toDoList.filter((todo) => +todo.id !== +event.target.id);
            model.deleteTodo(event.target.id);
        })
    }

    const init = () => {
        model.getTodo().then((todos) => {
            state.toDoList = todos;
        });
    };

    const bootstrap = () => {
        init();
        addTodo();
        deleteTodo();
    }

    return {
        bootstrap
    };
})(model, view);

appControler.bootstrap();