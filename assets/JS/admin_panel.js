document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const requests = JSON.parse(localStorage.getItem('requests')) || [];

    const requestList = document.getElementById('requestList');
    const userList = document.getElementById('userList');

    requests.forEach(request => {
        const li = document.createElement('li');
        li.textContent = `${request.firstName} ${request.lastName} (${request.username})`;
        const acceptButton = document.createElement('button');
        acceptButton.textContent = 'Aceptar';
        acceptButton.classList.add('accept');
        acceptButton.onclick = () => {
            users.push(request);
            localStorage.setItem('users', JSON.stringify(users));
            requests.splice(requests.indexOf(request), 1);
            localStorage.setItem('requests', JSON.stringify(requests));
            renderLists();
        };
        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Rechazar';
        rejectButton.classList.add('reject');
        rejectButton.onclick = () => {
            requests.splice(requests.indexOf(request), 1);
            localStorage.setItem('requests', JSON.stringify(requests));
            renderLists();
        };
        li.appendChild(acceptButton);
        li.appendChild(rejectButton);
        requestList.appendChild(li);
    });

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.firstName} ${user.lastName} (${user.username}) - ${user.role}`;
        userList.appendChild(li);
    });

    function renderLists() {
        requestList.innerHTML = '';
        userList.innerHTML = '';
        requests.forEach(request => {
            const li = document.createElement('li');
            li.textContent = `${request.firstName} ${request.lastName} (${request.username})`;
            const acceptButton = document.createElement('button');
            acceptButton.textContent = 'Aceptar';
            acceptButton.classList.add('accept');
            acceptButton.onclick = () => {
                users.push(request);
                localStorage.setItem('users', JSON.stringify(users));
                requests.splice(requests.indexOf(request), 1);
                localStorage.setItem('requests', JSON.stringify(requests));
                renderLists();
            };
            const rejectButton = document.createElement('button');
            rejectButton.textContent = 'Rechazar';
            rejectButton.classList.add('reject');
            rejectButton.onclick = () => {
                requests.splice(requests.indexOf(request), 1);
                localStorage.setItem('requests', JSON.stringify(requests));
                renderLists();
            };
            li.appendChild(acceptButton);
            li.appendChild(rejectButton);
            requestList.appendChild(li);
        });

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.firstName} ${user.lastName} (${user.username}) - ${user.role}`;
            userList.appendChild(li);
        });
    }
});