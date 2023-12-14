const addButton = document.querySelector("#addNoteButton");
const deleteAllNotesButton = document.querySelector("#deleteAllNotes");
const selectByTagButton = document.querySelector("#selectByTagButton");
const selectAllButton = document.querySelector("#selectAll");
const defaultColor = "yellow";

function listNotes(tag = null) {
    for (let index = 0; index < localStorage.length; index++) {
        const note = JSON.parse(localStorage.getItem(index));
        if (!tag) {
            createNote(note);
        } else {
            if (note.tags.includes(tag)) {
                createNote(note);
            }
        }
    }
}
if (localStorage.length > 0) {
    listNotes();
}

function createNote(note) {
    const allNotes = document.querySelector("#notes");
    const newNote = document.createElement("div");
    newNote.className = "note";

    newNote.style.backgroundColor = note.color;
    const noteInnerHtml = `
    <h1> ${note.title}</h1>
    <p> ${note.content}<p>
    <p>Data dodania: ${note.date}</p>
    <p class="tags">${note.tags.map((tag) => ` #${tag.trim()}`)}</p>
    `;
    newNote.innerHTML = noteInnerHtml;

    if (note.isPinned) {
        allNotes.insertBefore(newNote, allNotes.firstChild);
    } else {
        allNotes.appendChild(newNote);
    }
}

function addNote() {
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const noteColor =
        document.querySelector("#noteColor").value === ""
            ? defaultColor
            : document.querySelector("#noteColor").value;
    const tags = document.querySelector("#tagsInput").value.split(",");
    const isPinned = document.querySelector("#pin").checked;
    const id = localStorage.length;

    if (title === "" || content === "" || tags[0] === "") {
        alert("Uzupełnij pola");
        return;
    }

    const dateNow = new Date();
    const date = `${dateNow.getDay()}/${dateNow.getMonth()}/${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`;

    const note = {
        id: id,
        title: title,
        content: content,
        tags: tags,
        color: noteColor,
        isPinned: isPinned,
        date: date,
    };

    console.log(note);
    createNote(note);
    window.localStorage.setItem(note.id, JSON.stringify(note));
}

function deleteAllNotes() {
    localStorage.clear();
    const allNotes = document.querySelector("#notes");
    allNotes.innerHTML = "";
}

function selectByTag() {
    const tag = document.querySelector("#selectByTag").value;
    const allNotes = document.querySelector("#notes");
    allNotes.innerHTML = "";

    listNotes(tag);
}

addButton.addEventListener("click", addNote);
deleteAllNotesButton.addEventListener("click", deleteAllNotes);
selectByTagButton.addEventListener("click", selectByTag);
selectAllButton.addEventListener("click", () => {
    const allNotes = document.querySelector("#notes");
    allNotes.innerHTML = "";

    listNotes();
});
