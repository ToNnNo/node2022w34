function execute(sql){
    return null;
}

/*const nom = "Doe";
const prenom = "John";
const mail = "john.doe@gmail.com";
const telephone = null;
const pays = "United States";
execute(`
    INSERT INTO client (nom, prenom, mail, telephone, pays) 
    VALUE ('${nom}', '${prenom}', '${mail}', '${telephone}', '${pays}')
`);

const result = execute('SELECT * FROM client where id = 1');
*/

let client = { 
    nom: "Doe", prenom: "John", mail: "john.doe@gmail.com", 
    telephone: null, pays: "United States" }

execute(`
    INSERT INTO client (nom, prenom, mail, telephone, pays) 
    VALUE ('${client.nom}', '${client.prenom}', '${client.mail}', 
    '${client.telephone}', '${client.pays}')
`);

client = execute('SELECT * FROM client where id = 1');