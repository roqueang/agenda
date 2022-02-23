import express from "express";//import express
import {AddContact,listContact,deleteContact} from './src/mysql_conector.js';
let all;

const app = express();//start express

//start server
app.listen('8000', function(){
    console.log('Server on port http://localhost:8000');
});

//configure pug
app.set('views', './views');
app.set('view engine', 'pug');

//configure static files
app.use(express.static('./views'));
app.use(express.static('./src'));
app.use(express.static('./css'));


app.get('/', function(req,res){
    //res.send('Hello World');
    all = listContact();
    res.render('index', {title:'App contact', contacts:all})
});

app.get('/add/:name_contact/:number_contact', function(req, res) {
    let name_contact = req.params.name_contact
    let number_contact = req.params.number_contact
    AddContact(name_contact,number_contact)
    res.redirect('/')
    console.log(name_contact,number_contact)
})

app.get('/delete/:id', function(req, res){
    let id = req.params.id
    deleteContact(id)
    res.redirect('/')
})