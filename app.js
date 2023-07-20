const express = require('express');
const app = express();

const port = process.env.PORT || 3000; 


app.use(express.static(__dirname+"/public"))

app.set('views', __dirname + "/views" )
app.set('view engine', 'ejs');


app.get('/',(req,res)=> {
    res.render('index',{});
});

app.get('/contacto' , (req,res) => {
    res.render('contacto', {})
});

app.get('/cursos', (req,res)=> {
    res.render('cursos', {})
});

app.get('/instalaciones' , (req,res) => {
    res.render('instalaciones', {})
});

app.get('/professores', (req,res) => {
    res.render('professores', {})
})


app.listen(port, ()=> {
    console.log('desde el servidor ' + port)
});