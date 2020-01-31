// const public = true;
// let data;
// const processData = () => {
//   data = '123456677';
// };
// processData();
// console.log(data);

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');

  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    console.log(e.message);
    return [];
  }

};

//Save
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

//
const removeNotes = (id) => {
  const noteIndex = notes.findIndex(note => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

//Gene
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a');
  const statusEl = document.createElement('p')
  const noteP = document.createElement('p');



  if (note.title.length > 0) {
    noteP.textContent = note.title;
  } else {
    noteP.textContent = 'Unamed Note';
  }

  noteP.classList.add('list-item__title');
  noteEl.appendChild(noteP);

  noteEl.setAttribute('href', `edit.htm#${note.id}`);
  noteEl.classList.add('list-item');

  statusEl.classList.add('list-item__subtitle');
  statusEl.textContent = generateLastEdited(note.updatedAt);
  noteEl.appendChild(statusEl)

  return noteEl;
};

const sortNotes = (note, sortBy) => {
  if (sortBy === 'byEdited') {
    return note.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return note.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byAlphabet') {
    return note.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

//Render 
const renderNotes = (notes, filters) => {
  const notesEl = document.querySelector('#notes');
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

  notesEl.innerHTML = '';

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No Notes to show';
    emptyMessage.classList.add('empty-message');
    notesEl.appendChild(emptyMessage);
  }
};

const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}

//Primitive Values: String, Number, Boolean, null, undefined
//Function: myFunction --> Function.prototype --> Object.prototype --> null
//Arrar: myArray --> Array.prototype --> Object.prototype --> null
const team = ['Luke', 'Madison'];
console.log(team.hasOwnProperty('length'));

//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
const product = new Number(1);
console.log(product);

const getScore = (a, b) => 1;

console.log(getScore);
//Literal Object Creation
const obj = {
  name: 'Daniel Soladoye',
  age: 19
};

console.log(obj);