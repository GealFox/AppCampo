document.getElementById('master-register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Verificar si ya existe un admin master
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.role === 'admin_master')) {
        alert('Ya existe un Admin Master registrado.');
        return;
    }
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Crear el admin master
    const adminMaster = { name, surname, username, password, role: 'admin_master', status: 'approved' };
    users.push(adminMaster);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Admin Master registrado exitosamente.');
    
    // Redirigir a la página de inicio de sesión
    window.location.href = 'login.html';
});