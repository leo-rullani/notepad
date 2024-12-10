// Retrieve data from Local Storage
function getFromLocalStorage(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
}

// Save data to Local Storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Add a new note
function addNote() {
    const titleInput = document.getElementById('noteTitleInput');
    const contentInput = document.getElementById('noteContentInput');

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) return;

    notes.push({ title, content });
    saveToLocalStorage('notes', notes);
    renderAllSections();

    titleInput.value = '';
    contentInput.value = '';
}

// Render a section
function renderSection(data, containerId, toArchive, toTrash, isTrash) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach((note, index) => {
        const noteTemplate = getNoteTemplate(note.title, note.content, index, toArchive, toTrash, isTrash);
        container.innerHTML += noteTemplate;
    });
}

// Move a note between sections
function moveTo(destination, index) {
    if (destination === 'archive') {
        archivedNotes.push(notes.splice(index, 1)[0]);
    } else if (destination === 'trash') {
        trashNotes.push(notes.splice(index, 1)[0]);
    } else if (destination === 'content') {
        notes.push(
            archivedNotes.splice(index, 1)[0] || trashNotes.splice(index, 1)[0]
        );
    }

    saveToLocalStorage('notes', notes);
    saveToLocalStorage('archivedNotes', archivedNotes);
    saveToLocalStorage('trashNotes', trashNotes);

    renderAllSections();
}

// Permanently delete a note
function deletePermanently(index) {
    trashNotes.splice(index, 1);
    saveToLocalStorage('trashNotes', trashNotes);
    renderAllSections();
}