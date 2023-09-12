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

app.get('/1', (req, res) => { 
  res.render('contato', { message: 'Olá, Mundo!HAHAHAHAHAHAHahhahahahahahaha' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
