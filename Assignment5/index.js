const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

for (let key in state) {
    document.getElementById('short').innerHTML += `<option value="${key}">${key}</option>`;
    document.getElementById('long').innerHTML += `<option value="${state[key]}">${state[key]}</option>`;
}

function shortOnChange() {
    document.getElementById('long').selectedIndex = document.getElementById('short').selectedIndex;
}

function longOnChange() {
    document.getElementById('short').selectedIndex = document.getElementById('long').selectedIndex;
}