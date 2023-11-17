const addButton = document.querySelector("#addNoteButton");
const deleteAllNotesButton = document.querySelector("#deleteAllNotes");
const defaultColor = "yellow";


function listNotes(){
    for (let index = 0; index < localStorage.length; index++) {      
        const note = JSON.parse(localStorage.getItem(index));
        createNote(note);
    }
}

listNotes();
function createNote(note){
    const allNotes = document.querySelector("#notes");
    const newNote = document.createElement("div")
    newNote.className="note";
    newNote.style.backgroundColor = note.color;
    const noteInnerHtml = `
    <h1> ${note.title}</h1>
    <p> ${note.content}<p>
    <p>Data dodania: ${note.date}</p>
    `;
    newNote.innerHTML=noteInnerHtml;

    if(note.isPinned){
        allNotes.insertBefore(newNote, allNotes.firstChild)
    }else{
        allNotes.appendChild(newNote);
    }
}

function addNote(){
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const noteColor = document.querySelector("#noteColor").value === ''? defaultColor:document.querySelector("#noteColor").value;
    const isPinned = document.querySelector("#pin").checked;
    const id = localStorage.length;

    if(title===''|| content===''){
        alert("Uzupełnij pola");
        return;
    }

    const dateNow = new Date();
    const date = `${dateNow.getDay()}/${dateNow.getMonth()}/${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`;

    const note ={
        id: id,
        title: title,
        content: content,
        color: noteColor,
        isPinned: isPinned,
        date: date
    };
 
    createNote(note)
    window.localStorage.setItem(note.id, JSON.stringify(note));

}

function deleteAllNotes(){
    localStorage.clear();
    const allNotes = document.querySelector("#notes");
    allNotes.innerHTML='';
}

addButton.addEventListener("click", addNote);
deleteAllNotesButton.addEventListener("click", deleteAllNotes);