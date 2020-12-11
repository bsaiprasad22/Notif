let addtxt = document.getElementById('addtxt');
// let addbtn = document.getElementById('addbtn');
let additem = document.getElementById('additem');

// let notes = document.getElementById('notes');
let listitems = document.getElementById('listitems');
// let notesarr = [];
let itemsarr = [];


// function displayNotes() {
//     let innhtml = ``;
//     notesarr.forEach((ele, idx) => {
//         innhtml += `<div class="note">
//         ${ele}
//         <button class="delbtn" id="${idx}" onclick = "delNote(this.id)">Delete Note</button>
//     </div>`
//     });
//     notes.innerHTML = innhtml;
// }
// let date = new Date();

function displayList() {
    let innhtml =``;
    itemsarr.forEach((ele, idx) => {
        innhtml += `<div class="item">
        <input type="checkbox" name="check" id="c${idx}" class="checkbtn">
        <button class="delbtn2" id="s${idx}"><i class="fa fa-lg fa-star"></i></button>
        <div class="note">${ele}</div>
        <button class="delbtn2" id="d${idx}" onclick="delItem(this.id)"><i class="fa fa-lg fa-trash"></i></button>
    </div>`
    });
    listitems.innerHTML = innhtml;
}
// addbtn.addEventListener('click', () => {
//     // console.log(addtxt.value);
//     if(addtxt.value == "") {
//         alert("Please enter some text to add note.");
//     }
//     else {notesarr.push(addtxt.value);
//     displayNotes();
//     addtxt.value = "";
//     }
// });

additem.addEventListener("click", () => {
    if(addtxt.value == "") {
        alert("Please enter some text to add to list.");
    }
    else {itemsarr.push(addtxt.value);
    displayList();
    addtxt.value = "";
    }
});

// function delNote(index) {
//     notesarr.splice(index, 1);
//     displayNotes();
// }

// function striketxt(index) {
//     index = index.slice(1, );
//     console.log(index);
//     itemsarr[index] = itemsarr[index].strike();
//     console.log(itemsarr[index]);
//     displayList();
// }

function delItem(index) {
    // console.log(index);
    index = index.slice(1, );
    itemsarr.splice(index, 1);  
    displayList();
}

document.getElementById('listContainer').addEventListener('click', (e) => {
    if(e.target.tagName == "BUTTON"){
        e.target.parentElement.querySelector('div').classList.toggle('starred');
    }

    else if(e.target.tagName == "I"){
        e.target.parentElement.parentElement.querySelector('div').classList.toggle('starred');
    }
});

document.getElementById('listContainer').addEventListener('click', (ev) => {
    if(ev.target.tagName == "INPUT"){
        ev.target.parentElement.querySelector('div').classList.toggle("checkednote");
    }
});