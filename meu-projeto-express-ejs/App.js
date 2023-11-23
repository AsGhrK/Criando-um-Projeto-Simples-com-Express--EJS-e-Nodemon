const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// controller ou rota
app.get('/', (req, res) => {
  res.render('index', { produtos });
});


const produtos = [
  { id: 1, nome: "Mouse Gamer Redragon Reaping RGB, Preto, M987-K", preco: 150.30, dricricao: "discricao", imagem: "/img/mouse.png" , link:"mouse.ejs" },
  { id: 2, nome: "Teclado Gamer Mecânico T-Dagger Bora, Switch Red, RGB, Black, ABNT2, T-TGK315-RD V2", preco: 189.00, dricricao: "discricao", imagem: "/img/teclado.jpg", link:"teclado.ejs" },
  { id: 3, nome: "Monitor Gamer AGON PRO 27 4K 144Hz 1ms RGB DTS AG274UXP", preco: 7.599, dricricao: "discricao", imagem: "img/monitor.jpg" , link:"monitor.ejs" },
  { id: 4, nome: "PC Gamer ITX Arena, Ryzen 5 5600G, Radeon™ Graphics Vega 7, 16GB Ram, SSD 480GB, Gabinete RGB", preco: 2.399, dricricao: "discricao", imagem: "img/pc.jpg", link:"pc.ejs" },
  { id: 5, nome: "Suporte para Monitor Duplo Husky Office - Articulado, Com pistão a gás, Para tela de 10 a 32 - HOFL001", preco: 329.40, dricricao: "discricao", imagem: "img/suporte.jpg", link:"suporte.ejs" },
  { id: 6, nome: "Cadeira Gamer Husky Gaming Hailstorm, Preto, Com Almofadas, Reclinável, Descanso de Braço 2D - HHA-BK", preco: 767.41, dricricao: "discricao", imagem: "img/cadeira.jpg", link:"cadeira.ejs" }
]

function buscarProdutosPoriD(id) {
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}

console.log(buscarProdutosPoriD(2))

app.get('/index.ejs', (req, res) => {
  res.render('index');
});

app.get('/mouse.ejs', (req, res) => {
  res.render('mouse');
});


app.get('/monitor.ejs', (req, res) => {
  res.render('monitor');
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


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
