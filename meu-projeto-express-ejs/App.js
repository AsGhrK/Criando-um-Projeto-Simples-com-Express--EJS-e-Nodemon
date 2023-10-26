const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// controller ou rota
app.get('/', (req, res) => { 
  res.render('index', { message: 'Olá, Mundo!HAHAHAHAHAHAH' });
});
//

const produtos =[
  {id:1, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""},
  {id:2, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""},
  {id:3, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""}
]


app.get('/monitor.ejs', (req, res) => { 
  res.render('monitor');
});


app.get('/mouse.ejs', (req, res) => { 
  res.render('mouse');
});

app.get('/teclado.ejs', (req, res) => { 
  res.render('teclado');
});

app.get('/index.ejs', (req, res) => { 
  res.render('index');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
