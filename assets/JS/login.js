document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Bienvenido, ${user.firstName} ${user.lastName}`);
        // Redireccionar a la página correspondiente según el rol
        if (user.role === 'admin_master') {
            window.location.href = 'admin_panel.html';
        } else if (user.role === 'admin') {
            window.location.href = 'admin_requests.html';
        } else {
            window.location.href = 'user_dashboard.html';
        }
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});