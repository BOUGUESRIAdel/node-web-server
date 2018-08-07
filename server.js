/*-------------Node and 3rd party modules-------------*/
const express = require('express');
const hbs = require('hbs');
/*------------------Personnel Modules-----------------*/

/*-------------------Initialisations------------------*/
const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/*------------------------Code------------------------*/

app.get('/homi', (req, res)=> {
    res.render('home.hbs',{
        domaine_name : 'express-web-server.net',
        author : '<a href="https://github.com/BOUGUESRIAdel">BOUGUESRI Adel</a>',
        date : new Date().toDateString()
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