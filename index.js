// Add your code here
// index.js

function submitData(name, email) {
    const userData = {
        name: name,
        email: email
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        appendIdToDOM(data.id);
    })
    .catch(error => {
        appendErrorToDOM(error.message);
    });
}

function appendIdToDOM(id) {
    const idElement = docum.createElement('p');
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
