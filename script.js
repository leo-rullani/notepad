// Arrays to store notes
let notes = [];
let archivedNotes = [];
let trashNotes = [];

// Initialize app and load saved data
function init() {
    notes = getFromLocalStorage('notes');
    archivedNotes = getFromLocalStorage('archivedNotes');
    trashNotes = getFromLocalStorage('trashNotes');
    renderAllSections();
}

// Render all sections
function renderAllSections() {
    renderSection(notes, 'content', 'archive', 'trash', false);
    renderSection(archivedNotes, 'archiveContent', 'content', 'trash', false);
    renderSection(trashNotes, 'trashContent', null, null, true);
}