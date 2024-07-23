document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay un usuario logueado
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // Redirigir según el rol
        if (currentUser.role === 'admin') {
            window.location.href = 'views/admin.html';
        } else {
            window.location.href = 'views/data-entry.html';
        }
    } else {
        // Redirigir al login si no hay usuario logueado
        window.location.href = 'views/login.html';
    }
});