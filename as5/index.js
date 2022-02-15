const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};
let [first, second] = ['',''];
for (const key in state) {
    first +=`<option value="${state[key]}" > ${key}</option>`;
    second +=`<option value="${key}"> ${state[key]}</option>`;
}
document.getElementById('a').innerHTML = first;
document.getElementById('b').innerHTML = second;
function change(id){
    var sel = document.getElementById(id);
    var opt = sel.options[sel.selectedIndex];
    // console.log( opt.value );
    if(id ==='b'){
        document.getElementById('a').value = opt.text;
    }else{
        document.getElementById('b').value = opt.text;
    }
}