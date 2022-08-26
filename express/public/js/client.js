document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3200/client');
    const clients = await response.json();

    let html = "";
    for(let client of clients) {
        html += `
<tr>
    <td>${client.nom}</td>
    <td>${client.prenom}</td>
    <td>${client.mail ?? ""}</td>
    <td>${client.telephone ?? ""}</td>
</tr>`
    }

    document.querySelector('#clients').innerHTML = html;
})