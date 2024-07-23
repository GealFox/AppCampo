document.addEventListener('DOMContentLoaded', function() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser || currentUser.status !== 'approved') {
        alert('Su cuenta no está aprobada.');
        window.location.href = 'login.html';
        return;
    }
    
    // Aquí se añade el resto de la funcionalidad específica para la entrada de datos
});