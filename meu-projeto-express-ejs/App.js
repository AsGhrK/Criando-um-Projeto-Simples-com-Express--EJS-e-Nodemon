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

app.get('/monitor.ejs', (req, res) => { 
  res.render('monitor');
});


app.get('/mouse.ejs', (req, res) => { 
  res.render('mouse');
});

app.get('/teclado.ejs', (req, res) => { 
  res.render('teclado');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
