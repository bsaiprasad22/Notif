let addtxt = document.getElementById('addtxt');

let additem = document.getElementById('additem');

let listitems = document.getElementById('listitems');

let index = 0;

let totalTasks = 0;
let completedTasks = 0;

function createNote() {
    let Div = document.createElement('div');
    Div.className = 'item';
    Div.innerHTML = `<input type="checkbox" name="check" class="checkbtn">
    <button class="tooltip delbtn2 star"><i class="far fa-star fa-lg"></i><span class="tooltiptext small-font">Mark favorite</span></button>
    <div class="tooltip note">${addtxt.value}<span class="tooltiptext small-font">Click to edit</span></div>
    <button class="tooltip delbtn2" id="${index}" onclick="delItem(this.id)"><i class="fa fa-lg fa-trash"></i><span class="tooltiptext small-font">Delete item</span></button>`;
    addtxt.value = "";
    index = index + 1;
    document.getElementById('listitems').appendChild(Div);
    Array.from(document.getElementsByClassName('note')).forEach(el => {
        if(!el.classList.contains('starred')) {
            el.parentElement.classList.remove('invisible');
        }
    });
    totalTasks++;
    document.getElementById('percentage').style.width = `${((completedTasks/totalTasks)*100).toFixed(2)}%`;
    document.getElementById('percentage').innerText = `${((completedTasks/totalTasks)*100).toFixed(2)}%`;
    document.getElementById('task-stats').innerText = `Tasks completed: ${completedTasks}/${totalTasks}`;
}

additem.addEventListener("click", createNote);

addtxt.addEventListener("keydown", (e) => {
    if (e.code == "Enter"){
        createNote();
    }
});


document.getElementById('listContainer').addEventListener('click', (e) => {
    if (e.target.tagName == "BUTTON" && e.target.classList.contains('star')) {
        e.target.parentElement.querySelector('div').classList.toggle('starred');
        if(e.target.firstChild.classList.contains("far")) {
            e.target.firstChild.classList.remove("far");
            e.target.firstChild.classList.add("fas");
        }
        else{
            e.target.firstChild.classList.remove("fas");
            e.target.firstChild.classList.add("far");
        }
    }

    else if (e.target.tagName == "I" && e.target.classList.contains('fa-star')) {
        e.target.parentElement.parentElement.querySelector('div').classList.toggle('starred');
        if(e.target.classList.contains("far")) {
            e.target.classList.remove("far");
            e.target.classList.add("fas");
        }
        else {
            e.target.classList.remove("fas");
            e.target.classList.add("far");
        }
    }
});

document.getElementById('listContainer').addEventListener('click', (ev) => {
    if (ev.target.tagName == "INPUT") {
        ev.target.parentElement.querySelector('div').classList.toggle("checkednote");
        if (ev.target.checked) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        document.getElementById('percentage').style.width = `${((completedTasks/totalTasks)*100).toFixed(2)}%`;
        document.getElementById('percentage').innerText = `${((completedTasks/totalTasks)*100).toFixed(2)}%`;
        document.getElementById('task-stats').innerText = `Tasks completed: ${completedTasks}/${totalTasks}`;
    }
});

let clicks = 0;

document.getElementById('listContainer').addEventListener('click', e => {
    if (e.target.tagName == "DIV" && e.target.classList.contains("note") && clicks == 0) {
        clicks = clicks + 1;
        let existingText = e.target.childNodes[0].nodeValue;
        e.target.innerHTML = `<textarea class="editNote" columns = 5 rows = 2>${existingText}</textarea>`;
    }
});

document.getElementById('listContainer').addEventListener('keydown', e => {
    if (e.code == "Enter") {
        if (e.target.tagName == "TEXTAREA") {
            e.target.parentElement.innerHTML = `${e.target.value}` + `<span class="tooltiptext small-font">Click to edit</span>`;
            clicks = 0;
        }
    }
});

document.getElementById('listContainer').addEventListener('mouseenter', e => {
    if (e.target.classList.contains('fa-star')) {

    }
})

function delItem(idx) {
    if (document.getElementById(idx).parentElement.firstElementChild.checked) {
        totalTasks--;
        completedTasks--;
    }
    else {
        totalTasks--;
    }
    if(!isNaN((completedTasks/totalTasks)*100)) {
        document.getElementById('percentage').style.width = `${((completedTasks/totalTasks)*100).toFixed(2)}%`;
        document.getElementById('percentage').innerText = `${((completedTasks/totalTasks)*100).toFixed(2)}%`;
    } else {
        document.getElementById('percentage').style.width = `${(0).toFixed(2)}%`;
        document.getElementById('percentage').innerText = `${(0).toFixed(2)}%`;
    }
    
    document.getElementById('task-stats').innerText = `Tasks completed: ${completedTasks}/${totalTasks}`;
    document.getElementById(idx).parentElement.remove();

}

document.getElementById('filter-btn').addEventListener('click', e => {
    Array.from(document.getElementsByClassName('note')).forEach(el => {
        if(!el.classList.contains('starred')) {
            el.parentElement.classList.toggle('invisible');
        }
    });
});
