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
        <i class="far fa-star"></i>
        <div class="note itemtxt">${ele}</div>
        <button class="delbtn2" id="d${idx}" onclick="delItem(this.id)">Delete item</button>
        <button class="delbtn2" id="s${idx}" onclick="star(this.id)">Pin</button>
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

function star(index) {
    // console.log(document.getElementById(index).innerText);
    index = index.slice(1, );
    let item = itemsarr.splice(index, 1);
    itemsarr.unshift(item);
    displayList();
}