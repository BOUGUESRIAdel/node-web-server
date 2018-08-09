/*-------------Node and 3rd party modules-------------*/
const express = require('express');
const hbs = require('hbs');
const jsonfile = require('jsonfile');
const fs = require('fs');

/*------------------Personnel Modules-----------------*/

/*-------------------Initialisations------------------*/
const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentDate', ()=>{
    return new Date().toDateString();
});


/*------------------------Code------------------------*/

/* ---- server log hadler ---- */

app.use((req, res, next) => {
    var date = new Date().toString();
    var log = `${date} : ${req.method} ${req.url}\n`;

    console.log(log);
    fs.appendFile('server.log',log, (err) => {
        if(err)
            console.error('unable to append to server.log');
        
    });
    next();
});

app.get('/home', (req, res)=> {
    jsonfile.readFile('public/hbs/ressource/blogs.json', (err, data) => {
        res.render('home.hbs',data);
    });
});

app.get('/about', (req, res)=> {
    res.send({
        domaine_name : 'express-web-server.net',
        decription : 'a web app to practise creation of node web servers using Express.JS',
        author : {
            user_name : 'BOUGUESRIAdel',
            first_name : 'Adel',
            age : '22'
        },
        onGithub : true
    });
});

app.listen(3000, () => {
    console.log('server is up and running');
    
});