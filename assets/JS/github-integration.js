const githubToken = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN';
const repo = 'YOUR_USERNAME/YOUR_REPO';
const branch = 'main';

async function uploadFileToGitHub(path, content) {
    const url = `https://api.github.com/repos/${repo}/contents/${path}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${githubToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: `Add ${path}`,
            content: btoa(content),
            branch: branch
        })
    });
    const data = await response.json();
    return data;
}

// Ejemplo de uso:
const content = 'Contenido del archivo...';
uploadFileToGitHub('path/to/file.txt', content)
    .then(data => {
        console.log('Archivo subido a GitHub:', data);
    })
    .catch(error => {
        console.error('Error subiendo archivo a GitHub:', error);
    });