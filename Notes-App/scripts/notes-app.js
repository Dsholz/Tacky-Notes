let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited'
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
  const id = uuidv4();
  const date = moment();
  const presentDate = date.valueOf();
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: presentDate,
    updatedAt: presentDate
  });
  console.log(presentDate);
  saveNotes();
  location.assign(`edit.htm#${id}`);
});


document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// const now = moment();
// now.subtract(1, 'week').subtract(23, 'days');
// console.log(now.format('hh:mm:ss'));
// //November 3rd, 2003
// console.log(now.fromNow());
// const timeSatmp = now.valueOf();

// console.log(moment(timeSatmp).format('MMMM Do, YYYY'));

// const birthday = moment();
// birthday.year(2001).month(0).date(12);
// console.log(birthday.format('MMM D, YYYY'));