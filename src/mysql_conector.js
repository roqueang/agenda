import mysql from 'mysql'; //import mysql
let all
//create connection
const conector= mysql.createConnection({
    host:'localhost',
    user:'express',
    password:'#express22',
    database:'contact book'
});

/*const connect = () =>{
    conector.connect(err =>{
        if(err) throw err
        console.log('connected');
    });
};*/

const AddContact=(name_contact,number_contact)=>{
    const sql = `INSERT INTO personal_book (id_book, contact_name, contact_phone) VALUES (${null},'${name_contact}',${number_contact})`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const listContact=()=>{
    const sql = `SELECT * FROM personal_book`
    conector.query(sql,function(err,result, filed){
        all = result
    })
    return all
}

const deleteContact = id =>{
    const sql = `DELETE FROM personal_book WHERE id_book=${id}`
    conector.query(sql)
}

export {AddContact, listContact,deleteContact};