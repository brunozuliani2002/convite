document.addEventListener('DOMContentLoaded', (event) => {
    const nameInput = document.getElementById('name');
    const form = document.getElementById('nameForm');
    const greeting = document.getElementById('greeting');

    // Load saved name from localStorage
    const savedName = localStorage.getItem('name');
    if (savedName) {
        nameInput.value = savedName;
        greeting.textContent = `Olá, ${savedName}!`;
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value;
        localStorage.setItem('name', name);
        greeting.textContent = `Olá, ${name}!`;
    });
});
