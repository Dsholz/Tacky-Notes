const titleElement = document.querySelector('#note-title');
const timeElement = document.querySelector('#time-record');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);
let presenDate = moment().valueOf();
let notes = getSavedNotes();
let note = notes.find(note => note.id == noteId);

if (!note) {
  location.assign('index.htm');
}

let timeDifference = moment(note.updatedAt).fromNow();

titleElement.value = note.title;
timeElement.textContent = generateLastEdited(note.updatedAt);
bodyElement.value = note.body;

titleElement.addEventListener('input', (e) => {
  note.title = e.target.value;
  note.updatedAt = presenDate;
  timeElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes();
});
bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updatedAt = presenDate;
  timeElement.textContent = `Last Edited ${moment(presenDate).fromNow()}`;
  saveNotes();
});

removeElement.addEventListener('click', () => {
  removeNotes(noteId);
  saveNotes();
  location.assign('index.htm');
});


window.addEventListener('storage', (e) => {

  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => {
      return note.id == noteId;
    });

    if (!note) {
      location.assign('index.htm');
    }

    titleElement.value = note.title;
    timeElement.textContent = `Last Edited ${moment(presenDate).fromNow()}`;
    bodyElement.value = note.body;
    presenDate = note.updatedAt;
    console.log(note.updatedAt);
  }
});