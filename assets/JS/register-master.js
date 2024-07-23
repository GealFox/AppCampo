document.getElementById('register-master-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const adminMaster = {
        name,
        surname,
        username,
        password,
        role: 'master'
    };

    localStorage.setItem('adminMaster', JSON.stringify(adminMaster));
    alert('Admin Master registrado exitosamente.');
    window.location.href = 'login.html';
});