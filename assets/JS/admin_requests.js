document.addEventListener('DOMContentLoaded', function() {
    const requests = JSON.parse(localStorage.getItem('requests')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userRequestList = document.getElementById('userRequestList');

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
            renderRequestList();
        };
        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Rechazar';
        rejectButton.classList.add('reject');
        rejectButton.onclick = () => {
            requests.splice(requests.indexOf(request), 1);
            localStorage.setItem('requests', JSON.stringify(requests));
            renderRequestList();
        };
        li.appendChild(acceptButton);
        li.appendChild(rejectButton);
        userRequestList.appendChild(li);
    });

    function renderRequestList() {
        userRequestList.innerHTML = '';
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
                renderRequestList();
            };
            const rejectButton = document.createElement('button');
            rejectButton.textContent = 'Rechazar';
            rejectButton.classList.add('reject');
            rejectButton.onclick = () => {
                requests.splice(requests.indexOf(request), 1);
                localStorage.setItem('requests', JSON.stringify(requests));
                renderRequestList();
            };
            li.appendChild(acceptButton);
            li.appendChild(rejectButton);
            userRequestList.appendChild(li);
        });
    }
});