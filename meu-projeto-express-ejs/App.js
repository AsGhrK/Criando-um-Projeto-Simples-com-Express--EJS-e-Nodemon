const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// controller ou rota
app.get('/', (req, res) => { 
  res.render('index', {produtos});
});


const produtos =[
  {id:1, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""},
  {id:2, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""},
  {id:3, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""},
  {id:4, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""},
  {id:5, nome: "nome",preco: 1000, dricricao:"discricao", imagem:""}
]

function buscarProdutosPoriD(id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}

console.log(buscarProdutosPoriD(2))

app.get('/monitor.ejs', (req, res) => { 
  res.render('monitor');
});


app.get('/mouse.ejs', (req, res) => { 
  res.render('mouse');
});

app.get('/teclado.ejs', (req, res) => { 
  res.render('teclado');
});

app.get('/pc.ejs', (req, res) => { 
  res.render('pc');
});

app.get('/suporte.ejs', (req, res) => { 
  res.render('suporte');
});

app.get('/cadeira.ejs', (req, res) => { 
  res.render('cadeira');
});

app.get('/index.ejs', (req, res) => { 
  res.render('index');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
