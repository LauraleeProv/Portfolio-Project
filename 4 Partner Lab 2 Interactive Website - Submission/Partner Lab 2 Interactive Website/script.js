const customizeForm = document.getElementById('customizeForm');
const greetingHeading = document.getElementById('greetingHeading');
const messageParagraph = document.getElementById('messageParagraph');
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const colorSelect = document.getElementById('colorSelect');
const updateStatus = document.getElementById('updateStatus');

customizeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    greetingHeading.textContent = name ? `Hello, ${name}!` : 'Hello User!';
    messageParagraph.textContent = message || 'Welcome to your interactive page. Add a name, leave a note, and choose a color to make it yours.';
    document.body.style.setProperty('--page-color', colorSelect.value);
    updateStatus.textContent = 'Your page has been updated.';
});

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyTodo = document.getElementById('emptyTodo');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemText = todoInput.value.trim();
    if (!itemText) return;

    const item = document.createElement('li');
    item.textContent = itemText;
    todoList.appendChild(item);
    emptyTodo.hidden = true;
    todoInput.value = '';
    todoInput.focus();
});
