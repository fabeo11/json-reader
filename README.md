# :monocle_face: Leitor JSON 

Esse projeto lê um diretório local com arquivos Json, obtém suas respectivas informações e grava no banco de dados o que foi lido apresentando o resultado em uma página web. O programa também faz o uso de alguns conceitos de programação orientada a objetos.

# :computer: Desenvolvido com :

<div>  
  <img src="https://user-images.githubusercontent.com/77861206/107676832-57368c00-6c78-11eb-9288-cd933e208229.png" width="150px">
  <img src="https://marcas-logos.net/wp-content/uploads/2020/11/MySQL-logo.png" width="150px">
  <img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png" style="border-radius: 25px;" width="150px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" style="border-radius: 25px;" width="100px">
  
</div>

## Como iniciar o projeto? :thinking:
Importante: É necessário ter instalado o <a src="https://dev.mysql.com/downloads/installer/">mysql</a> <a src="https://nodejs.org/pt-br/download/">NodeJs</a>e alterar os parametros no arquivo de  configuração do banco de dados "bd.js", localizado em ./src/API/services.

Primeiramente, vamos instalar todas as depêndencias com o comando: 
### `npm install`

Para iniciar o projeto, basta inicializar o banco de dados (com nodeJs) executando o arquivo index, que se encontra em src/API/services/index.js e insira os seguintes comandos:

### `node index`

em seguida, em um novo terminal iniciar a aplicação front-end com o comando:

### `npm start`

A página web irá rodar em: [http://localhost:3000](http://localhost:3000).
