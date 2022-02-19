const View = (() => {
    const domElements = {
        shortNames: document.querySelector('#shortNames'),
        fullNames: document.querySelector('#fullNames')
    }

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }
    return {
        domElements,
        render
    }
}
)();

const Model = (() => {
    const state = {
        a: "apple",
        b: "banana",
        c: "city",
        d: "dom",
        e: "end",
        f: "forEach"
    };
    return {state};
}
)();

const Controller = ((view, model) => {
    // console.log(Object.keys(model.state));
    const createKeyList = () => {
        let tmp = '';
        for (let shortName of Object.keys(model.state)) {
            tmp += `<option value="${shortName}">${shortName}</option>`;
        }
        //现在的这个是id 也可以是那个变量
        console.log(model.state);
        view.render(shortNames, tmp);
        
    }
    

    const createValueList = () => {
        let tmp = '';
        for (let shortName of Object.keys(model.state)) {
            tmp += `<option value="${shortName}">${model.state[shortName]}</option>`;
        };
        view.render(fullNames, tmp);
        
    }

    const setupEvent = () => {
        view.domElements.shortNames.addEventListener('change', () => {
            view.domElements.fullNames.value = view.domElements.shortNames.value;
        });
        view.domElements.fullNames.addEventListener('change', () => {
            view.domElements.shortNames.value = view.domElements.fullNames.value;
        });
    }
    
    const init = () => {
        createKeyList();
        createValueList();
        setupEvent();
    }
    return {init};
}
)(View, Model);

Controller.init();
