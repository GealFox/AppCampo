document.addEventListener('DOMContentLoaded', function() {
    // Aquí agregar la lógica para cargar y mostrar los datos de Excel
    const excelContent = document.getElementById('excel-content');
    
    // Simulación de carga de datos desde localStorage
    const data = JSON.parse(localStorage.getItem('chequeoData')) || {};
    
    let content = '<table border="1" cellpadding="5" cellspacing="0">';
    content += '<tr><th>Empresa</th><th>ART</th><th>Fecha ART</th><th>S.V.O</th><th>Fecha S.V.O</th><th>PROG, SEG</th><th>Fecha PROG, SEG</th></tr>';
    content += `<tr><td>${data.empresa || ''}</td><td>${data.art || ''}</td><td>${data.fechaArt || ''}</td><td>${data.svo || ''}</td><td>${data.fechaSvo || ''}</td><td>${data.progSeg || ''}</td><td>${data.fechaProgSeg || ''}</td></tr>`;
    content += '</table>';
    
    excelContent.innerHTML = content;
});