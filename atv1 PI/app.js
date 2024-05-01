const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Analise a URL para obter o parâmetro "tabuada"
  const queryData = url.parse(req.url, true).query;
  const number = parseInt(queryData.tabuada) || 1;

  // Crie a página HTML com a tabuada
  const html = createHTMLTable(number);

  // Configure o cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Envie a página HTML como resposta
  res.end(html);
});

server.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080/');
});

function createHTMLTable(number) {
  let tableHTML = '<html><body>';
  tableHTML += `<h1>Tabuada do ${number}</h1>`;
  tableHTML += '<table border="1">';

  for (let i = 1; i <= 10; i++) {
    tableHTML += '<tr>';
    tableHTML += `<td>${number} x ${i}</td>`;
    tableHTML += `<td>${number * i}</td>`;
    tableHTML += '</tr>';
  }

  tableHTML += '</table>';
  tableHTML += '</body></html>';
  return tableHTML;
}
