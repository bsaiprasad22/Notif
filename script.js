let addtxt = document.getElementById('addtxt');

let additem = document.getElementById('additem');

let listitems = document.getElementById('listitems');

let index = 0;
additem.addEventListener("click", () => {

    let Div = document.createElement('div');
    Div.className = 'item';
    Div.innerHTML = `<input type="checkbox" name="check" class="checkbtn">
    <button class="delbtn2"><i class="fa fa-lg fa-star"></i></button>
    <div class="note">${addtxt.value}</div>
    <button class="delbtn2" id="${index}" onclick="delItem(this.id)"><i class="fa fa-lg fa-trash"></i></button>`;
    addtxt.value = "";
    index = index + 1;
    document.getElementById('listitems').appendChild(Div);
});


document.getElementById('listContainer').addEventListener('click', (e) => {
    if (e.target.tagName == "BUTTON") {
        e.target.parentElement.querySelector('div').classList.toggle('starred');
    }

    else if (e.target.tagName == "I") {
        e.target.parentElement.parentElement.querySelector('div').classList.toggle('starred');
    }
});

document.getElementById('listContainer').addEventListener('click', (ev) => {
    if (ev.target.tagName == "INPUT") {
        ev.target.parentElement.querySelector('div').classList.toggle("checkednote");
    }
});

let clicks = 0;

document.getElementById('listContainer').addEventListener('click', e => {
    if (e.target.tagName == "DIV" && e.target.className == "note" && clicks == 0) {
        clicks = clicks + 1;
        let existingText = e.target.innerText;
        e.target.innerHTML = `<textarea class="editNote" columns = 5 rows = 2>${existingText}</textarea>`;
    }
});

document.getElementById('listContainer').addEventListener('keyup', e => {
    if (e.code == "Enter") {
        if (e.target.tagName == "TEXTAREA") {
            e.target.parentElement.innerHTML = e.target.value;
            clicks = 0;
        }
    }
});

function delItem(idx) {
    document.getElementById(idx).parentElement.remove();
}