const express = require('express');
const app = express();

// Rota para gerar a tabuada
app.get('/', (req, res) => {
    const { tabuada = 1, sequencia = 10 } = req.query;
    let html = '<h1>Tabuada do ' + tabuada + '</h1>';
    for (let i = 0; i <= sequencia; i++) {
        html += `<p>${tabuada} x ${i} = ${tabuada * i}</p>`;
    }
    res.send(html);
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
