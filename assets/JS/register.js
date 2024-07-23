document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    // Verificar si el usuario ya existe
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username)) {
        alert('El usuario ya existe');
        return;
    }
    
    // Crear el nuevo usuario con estado "pendiente"
    const newUser = { name, surname, username, password, role, status: 'pending' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registro exitoso. Su solicitud está pendiente de aprobación.');
    
    // Redirigir a la página de inicio de sesión
    window.location.href = 'login.html';
});