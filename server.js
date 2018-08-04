/*-------------Node and 3rd party modules-------------*/
const express = require('express');

/*------------------Personnel Modules-----------------*/

/*-------------------Initialisations------------------*/
const app = express();

/*------------------------Code------------------------*/
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    res.send('<h1>Hello Express</h1>');
    
});

app.get('/about', (req, res)=> {
    //res.send('<h1>about page</h1>');
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