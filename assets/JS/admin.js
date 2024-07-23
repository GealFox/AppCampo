document.addEventListener('DOMContentLoaded', function() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'admin_master')) {
        alert('No tiene permisos para acceder a esta página');
        window.location.href = 'login.html';
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const pendingRequests = document.getElementById('pending-requests');
    const registeredUsers = document.getElementById('registered-users');
    
    // Mostrar solicitudes pendientes
    users.forEach(user => {
        if (user.status === 'pending') {
            let li = document.createElement('li');
            li.textContent = `${user.name} ${user.surname} - ${user.username} (${user.role})`;
            let approveButton = document.createElement('button');
            approveButton.textContent = 'Aprobar';
            approveButton.addEventListener('click', function() {
                user.status = 'approved';
                localStorage.setItem('users', JSON.stringify(users));
                location.reload();
            });
            li.appendChild(approveButton);
            pendingRequests.appendChild(li);
        }
    });
    
    // Mostrar usuarios registrados
    users.forEach(user => {
        if (user.status === 'approved') {
            let li = document.createElement('li');
            li.textContent = `${user.name} ${user.surname} - ${user.username} (${user.role})`;
            registeredUsers.appendChild(li);
        }
    });
});