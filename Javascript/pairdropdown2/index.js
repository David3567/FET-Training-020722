const View = (() => {
    const domId = {
        keys: document.querySelector('#keys'),
        values: document.querySelector('#values')
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    return {
        domId,
        render
    };
    
})();

const Model = ((view) => {
    const state = {
        a: "apple",
        b: "banana",
        c: "city",
        d: "dom",
        e: "end",
        f: "forEach"
    };

    const createKeyList = () => {
        let tmp = '';
        Object.keys(state).forEach((key) => {
            tmp += `<option value="${key}">${key}</option>`;
        });
        view.render(keys, tmp);
    };

    const createValueList = () => {
        let tmp = '';
        Object.keys(state).forEach((key) => {
            tmp += `<option value="${key}">${state[key]}</option>`;
        });
        view.render(values, tmp);
    };

    const relationship = () => {
        view.domId.keys.addEventListener('change', (event) => {
            view.domId.values.value = event.target.value;
        });
        view.domId.values.addEventListener('change', (event) => {
            view.domId.keys.value = event.target.value;
        });
    };

    return {
        createKeyList,
        createValueList,
        relationship
    };

})(View);

const Controller = ((model) => {

    const init = () => {
        model.createKeyList();
        model.createValueList();
        model.relationship();
    };

    return { init };

})(Model);

Controller.init();