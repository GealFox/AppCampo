document.addEventListener('DOMContentLoaded', function() {
    const resetAppButton = document.getElementById('resetApp');
    const deleteAdminMasterButton = document.getElementById('deleteAdminMaster');

    resetAppButton.onclick = () => {
        if (confirm('¿Estás seguro de que deseas restablecer la aplicación? Se eliminarán todos los datos.')) {
            localStorage.clear();
            alert('Aplicación restablecida. Se eliminaron todos los datos.');
        }
    };

    deleteAdminMasterButton.onclick = () => {
        if (confirm('¿Estás seguro de que deseas eliminar al Admin Master?')) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const adminMasterIndex = users.findIndex(user => user.role === 'adminMaster');
            if (adminMasterIndex !== -1) {
                users.splice(adminMasterIndex, 1);
                localStorage.setItem('users', JSON.stringify(users));
                alert('Admin Master eliminado.');
            } else {
                alert('No se encontró al Admin Master.');
            }
        }
    };
});