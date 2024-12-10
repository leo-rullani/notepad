function getNoteTemplate(title, content, index, toArchive, toTrash, isTrash) {
    return `
        <div class="note">
            <h3>${title}</h3>
            <p>${content}</p>
            ${!isTrash ? `<button onclick="moveTo('${toArchive}', ${index})">AR</button>` : ''}
            ${!isTrash ? `<button onclick="moveTo('${toTrash}', ${index})">X</button>` : ''}
            ${isTrash ? `<button onclick="deletePermanently(${index})">Delete</button>` : ''}
        </div>`;
}