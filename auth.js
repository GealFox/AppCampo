const programador = {
    username: 'programador',
    password: 'programador123'
};

// Función para autenticar usuarios
function authenticate(username, password) {
    const adminMaster = JSON.parse(localStorage.getItem('adminMaster'));
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (username === programador.username && password === programador.password) {
        return { role: 'programador' };
    } else if (adminMaster && username === adminMaster.username && password === adminMaster.password) {
        return { role: 'master' };
    } else {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            return { role: user.role };
        }
    }
    return null;
}

// Ejemplo de cómo usar esta función en una página de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = authenticate(username, password);
    if (user) {
        if (user.role === 'programador') {
            window.location.href = 'programmer.html';
        } else if (user.role === 'master') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'user.html';
        }
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});