const TodoAPI = (() => {
    // const basurl = 'http://localhost:3000';
    const basurl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () =>
        fetch([basurl, todoPath].join('/'))
            .then(response => response.json());

    const deleteTodo = id =>
        fetch([basurl, todoPath, id].join('/'), {
            method: 'DELETE',
        });

    const addTodo = (newtodo) =>
        fetch([basurl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(newtodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());

    return {
        getAllTodos,
        deleteTodo,
        addTodo,
    }
})();

const View = (() => {
    const domString = {
        todolistContainer: '#todolist-container',
        deleteBtns: 'button',
        todolistinput: '.todolist-input',
    }

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }

    const createTheTmp = arr => {
        let tmp = '';
        arr.forEach(ele => {
            tmp += ` <li>
            <span>${ele.title}</span>
            <button 
            id='${ele.id}'>
            X
            </button>
            </li>`;
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
        constructor(title) {
            // id does not care 
            this.userId = 22;
            this.title = title;
            this.completed = false;
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

            // const deleteBtns = document.querySelectorAll(view.domString.deleteBtns);

            // deleteBtns.forEach(btn => {
            //     // wait until somebody click it to trigger the logic 
            //     btn.addEventListener('click', event => {
            //         // setter =  getter  递归 set里面有set 
            //         this.todolist = this.#todolist.filter(ele => 
            //             // + makes them have same data type
            //             +ele.id !== +event.target.id
            //         )
            //     })
            // })
        }
    }

    const getAllTodos = api.getAllTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    return {
        getAllTodos,
        deleteTodo,
        addTodo,
        State,
        Todo,
    }
})(TodoAPI, View);

const Controler = ((view, model) => {
    const state = new model.State();
    
    const addTodo = () => {
        const input = document.querySelector(view.domString.todolistinput);
        input.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                const newtodo = new model.Todo(event.target.value);
                model.addTodo(newtodo).then(newtodo => {
                    // setter = [newdata,...getter]
                    state.todolist = [newtodo, ...state.todolist];
                }) 
                event.target.value = '';
            }
        })
    }

    const deleteTodo = () => {
        const todolistContainer = document.querySelector(view.domString.todolistContainer);
        todolistContainer.addEventListener('click', event => {
            state.todolist = state.todolist.filter(ele =>
                // + makes them have same data type
                +ele.id !== +event.target.id
            )
            //delete from backhand
            model.deleteTodo(event.target.id);
        });
    }

    const initTodoList = () => {
        model.getAllTodos().then(todolist => {
            // transfering
            state.todolist = todolist;
            // console.log(typeof todolist);
        });
    }

    const init = () => {
        initTodoList();
        deleteTodo();
        addTodo();
    }

    return { init };

})(View, Model);

Controler.init();