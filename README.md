# Generate a PDF file from MongoDB using NodeJS

## (EN)
<pre>The purpose of this code is to return data from MongoDB in PDF format. The dependencies used in the project are express, mongoose, nodemon (optional) and html-pdf-phantomjs-included.<br>
**Requirements**<br>
NodeJS 16 or higher;<br>
Docker and Docker Compose;<br>
Postman, or any API Tester of your choice.<br>
**Usage**<br>
Clone this repository and run the __npm install__ command. Then mount the MongoDB container with the command __docker-compose build__ and start it with the command __docker-compose up__<br> start the NodeJS application with the __npm start__ command.<br>
This example is applied to PC video cards. Using Postman, connect to the URL localhost:3000/ and send a POST request with the following JSON structure:<br>
{<br>
    "name": "video_card_name",<br>
    "memorySize": XXXX,<br>
    "manufacturer":"manufacturer's_name"<br>
}<br>

Then, using Postman or a web browser, send a GET request to the URL localhost:3000/. A PDF will be displayed, or downloaded.<br>
To use in your own applications, don't forget to modify the template.ejs file as well.<br>

## (PT)<br>
O objetivo desse código é retornar dados do MongoDB no formato PDF. As dependências usadas no projeto são express, mongoose, nodemon (opcional) e html-pdf-phantomjs-included.<br>

**Requisitos**<br>
NodeJS 16 ou superior;<br>
Docker e Docker Compose;<br>
Postman, ou qualquer API Tester de sua preferência.<br>

**Modo de uso**<br>
Clone esse repositório e rode o comando __npm install__. Em seguida, monte o conteiner do MongoDB com o comando __docker-compose build__ e o inicie com o comando __docker-compose up__<br>. Inicie a aplicação NodeJS com o comando __npm start__.<br>
Esse exemplo está aplicado para placas de video de PC. Utilizando o Postman, conecte na URL localhost:3000/ e mande uma requisição POST com  a seguinte estrutura JSON:<br>
{<br>
    "name": "nome_da_placa",<br>
    "memorySize": XXXX,<br>
    "manufacturer":"nome_do_fabricante"<br>

}<br>
Em seguida, utilizando o Postman ou o navegador web, mande uma requisição GET para a URL localhost:3000/. Um PDF será exibido, ou baixado.<br>
Para usar em suas aplicações, não esqueça de modificar também o arquivo template.ejs.<br></pre>

