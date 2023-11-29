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
  { id: 1, nome: "Mouse Gamer Redragon Reaping RGB, Preto, M987-K", preco: 150.30, dricricao: "TCarcaça com design em colmeia ultraleve e cabo ultraleve Shape ergonômico e extremamente confortável até mesmo durante longos períodos de uso. Equipado com o sensor PIXART PWM 3327 o mouse Reaping eleva a sua experiência dentro dos games. Iluminação RGB Redragon Chroma Mk.II trazendo mais brilho para seu setup. Mouse feet de qualidade superior que oferece controle suave com baixo atrito e deslizamento consistente.", imagem: "/img/mouse.png" , link:"mouse.ejs" },
  { id: 2, nome: "Teclado Gamer Mecânico T-Dagger Bora, Switch Red, RGB, Black, ABNT2, T-TGK315-RD V2", preco: 189.00, dricricao: "MÉ um tipo de periférico de entrada utilizado pelo usuário para a entrada manual no sistema de dados e comandos. Possui teclas representando letras, números, símbolos e outras funções, baseado no modelo de teclado das antigas máquinas de escrever.", imagem: "/img/teclado.jpg", link:"teclado.ejs" },
  { id: 3, nome: "Monitor Gamer AGON PRO 27 4K 144Hz 1ms RGB DTS AG274UXP", preco: 7.599, dricricao: "Mostre todo seu potencial e ative o modo supremo com um monitor ideal para consoles da nova geração. O AG274UXP conta com uma incrível resolução 4K UHD, taxa de atualização de 144Hz, tecnologia HDR 600 e alto-falantes DTS integrados.", imagem: "img/monitor.jpg" , link:"monitor.ejs" },
  { id: 4, nome: "PC Gamer ITX Arena, Ryzen 5 5600G, Radeon™ Graphics Vega 7, 16GB Ram, SSD 480GB, Gabinete RGB", preco: 2.399, dricricao: "Com os Computadores Gamer com a marca ITX GAMER, você pode confiar, produzidos com o melhores componentes! AMD Ryzen 5 5600G 3.9GHz, o melhor custo benefício do mercado! Placa mãe AM4 A320M, SSD 480GB 2.5 SATA III, Velocidade garantida para máxima performance! Memória Gamer 16GB (2x8GB) DDR4 3200Mhz", imagem: "img/pc.jpg", link:"pc.ejs" },
  { id: 5, nome: "Suporte para Monitor Duplo Husky Office - Articulado, Com pistão a gás, Para tela de 10 a 32 - HOFL001", preco: 329.40, dricricao: "O suporte Husky vem com presilha tipo C para instalação em mesa, e comporta dois monitores de 10 até 32 polegadas. Possuem braços articulados com pistões a gás, que funcionam como amortecedores para ajustar perfeitamente os monitores na altura desejada, com movimentos leves e estabilizados. Personalize inclinação, extensão, altura e posição com a praticidade que o suporte oferece, para manter conforto durante longos períodos de uso e trabalho, além de manter a bancada organizada e os cabos escondidos, deixando o espaço de trabalho com tudo que precisa para o melhor desempenho.", imagem: "img/suporte.jpg", link:"suporte.ejs" },
  { id: 6, nome: "Cadeira Gamer Husky Gaming Hailstorm, Preto, Com Almofadas, Reclinável, Descanso de Braço 2D - HHA-BK", preco: 767.41, dricricao: "Cadeira Gamer Husky Gaming Hailstorm - PretO A Cadeira Gamer Husky HailStorm oferece design arrojado e moderno, perfeito para que seu espaço gamer tenha a sua identidade. A Husky HailStorm possui Material PU em sua superfície, com densidade da espuma de 50kg/m³ no assento e 35kg/m³ no encosto, possibilitando máximo conforto ao usuário, ideal para quem passa horas se divertindo no mundo dos games. O tamanho do assento é de 400x470mm e do encosto é de 580x850mm, ou seja, muito mais espaço para gamers que buscam robustez aliado à qualidade. Cadeira Gamer Reclinável: São diversas as vantagens da Cadeira Gamer Husky HailStorm: reclinagem de até 135º, regulagem de altura por pistão à gás e apoios de braço com regulagem pelo mecanismo butterfly - podem ser regulados para cima/baixo e esquerda/direita. Muito mais que estilo, todos esses ajustes proporcionam uma rica experiência que melhoram a performance durante as partidas. Conforto e Versatilidade: Para maximizar a sensação de conforto extremo, a cadeira conta com duas almofadas de apoio, no encosto e também no assento. Outro item fundamental são suas rodas, que foram desenvolvidas em 100% Nylon. Podem ser utilizadas em ambientes como escritórios, residências e lojas comerciais, proporcionando versatilidade para a cadeira. Muito conforto para você passar níveis difíceis no singleplayer, ou quando é preciso de muita atenção e foco nas partidas online como o League of Legends, Fortnite, CS:GO, Free Fire, em que cada ponto, conta!", imagem: "img/cadeira.jpg", link:"cadeira.ejs" },
  { id: 7, nome: "Mesa Gamer HMG01 Azul Fortrek", preco: 712.96, dricricao: "Mesa gamer modelo HMG01 Fortrek Dimensões da Mesa (L x P x A): 1200 x 800 x 765 mm Com design ergonômico, a mesa HMG01 é feita de MDF originado de reflorestamento e suporta até 150 kg Apresenta pintura a pó eletrostática e arte em adesivo de alta resistência; Possui estrutura em aço 50x20 com pés niveladores e pesa 18 kg", imagem: "img/measa.jpg", link:"mesa.ejs" },
  { id: 7, nome: "Mouse Pad Gamer Iluminado led Rgb Grande 80 cm por 30 com Mousepad gamer Led com em volta superficie speed para jogos", preco: 39.80, dricricao: "É tão fácil deslizar o mouse. Com o seu mousepad você poderá preencher a tela do seu computador com cliques. Sua superfície elaborada dará precisão e conforto aos seus movimentos. Com um moderno sistema de luz LED integrado, este acessório trará efeito de iluminação para a experiência diária com o seu equipamento. Sincronize a emissão e intensidade das cores com o software e desfrutar do seu estímulo visual.", imagem: "img/ped.jpg", link:"ped.ejs" }
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
