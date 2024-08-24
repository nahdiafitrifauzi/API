
async function fetchData() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        
        const data = await response.json();
        
        
        updateUI(data);

    } catch (error) {
        
        console.error('There has been a problem with your fetch operation:', error);
    }
}


function updateUI(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; 

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userList.appendChild(listItem);
    });
}
document.addEventListener('DOMContentLoaded', fetchData);
