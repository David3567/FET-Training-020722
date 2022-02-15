const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

const shortNames = document.getElementById('shortNames');
const fullNames = document.getElementById('fullNames');

// render method 
const render = (element, tmp) => {
    element.innerHTML = tmp;
}
// modify html
let tmp1 = '';
for (let shortName of Object.keys(state)) {
    tmp1 += `<option value="${shortName}">${shortName}</option>`;
}
render(shortNames, tmp1);

let tmp2 = '';
for (let shortName of Object.keys(state)) {
    tmp2 += `<option value="${shortName}">${state[shortName]}</option>`;
}
render(fullNames, tmp2);

//addEventListener
shortNames.addEventListener('change', change1)

function change1 () {
    fullNames.value = shortNames.value;
}

fullNames.addEventListener('change', change2)

function change2 () {
    shortNames.value = fullNames.value;
}