<h1>Projeto E-commerce FrontEnd</h1>


Aplicação FrontEnd de cadastro, edição e exclusão de produtos de um e-commerce.

## Softwares e linguagens usados 💾
<table>
  <span>
  <tr>
    <td align="center">
      <a href="https://react-bootstrap.github.io/"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTI3Ljk4IDIwMTYuODciIGZpbGw9IiM0MWUwZmQiPgogIDxwYXRoICBkPSJNODg4IDExMTkuMTdjMTYtMzIuNjIgMzIuODQtNjUuMzcgNTAuMTctOTcuMzVsLjE1LS4yNyAxOC4zOS0zNS42OCAyNy4xNi00NSAuMTctLjI5YzEwLjE0LTE3LjI2IDIwLjY2LTM0LjY4IDMxLjI3LTUxLjc4bDE4LjY5LTMwLjg3YzI0Ljg4LTQxLjE5IDQ0Ljg4LTcxLjIzIDc2LjQzLTExNC43NiAxNy0yMy40MyAzMy4xMi00NCA1OC42Ni03NS45MmwuMDYtLjA2IDEuMjYtMS41OS40OS0uNjNjMTAuMzctMTMuMjIgMjAuODQtMjYuMjUgMzEuMTEtMzguNzNsLjM0LS40Mi4yLS4yNWMyMy44My0yOS41MSA0OC4xMi01OS4xMyA3Mi4xOS04OGw5LjU3LTExLjQ4VjM1Ni41NEgxMjY3Yy05LjIzLTguNjgtMTguNjYtMTcuMy0yOC4wOC0yNS42OS03Ni4zMi02Ny43Mi0xNTIuNDMtMTIwLjg1LTIyNi4yNy0xNTcuNzktNzUuNzEtMzcuOTItMTQ1LjYzLTU3LjE0LTIwNy44LTU3LjE0LTQ0LjM5IDAtODQuMDYgOS45NC0xMTcuOTEgMjkuNTMtMzIuNTUgMTguODQtNTkuOSA0Ni45MS04MS4zMSA4My40NC0yMC4wNiAzNC4yMy0zNC44NCA3NS44OS00My45NSAxMjMuODEtMTcuNTQgOTIuMzctMTMuNzQgMjA4IDExIDMzNC4zNCAzLjEyIDE1LjkgNi41NiAzMiAxMC4yNSA0OC0xOS43NCA2LTM4LjkxIDEyLjE4LTU3LjEzIDE4LjUzLTExOS4yNiA0MS41OC0yMTkgOTUuOTEtMjg4LjQyIDE1Ny4xNC0zNiAzMS43MS02My44NCA2NS4yMy04Mi44OSA5OS42Mi0yMC4yNCAzNi41Ny0zMC41MSA3NC4wOC0zMC41MSAxMTEuNDkgMCA3NSA0MS41NSAxNTEgMTIwLjE1IDIxOS45NCA3NCA2NC45MyAxNzguNjUgMTIxLjYyIDMwMi41NSAxNjQgMTEuNTEgMy45MSAyMy4yMiA3LjcxIDM1IDExLjM0LTQuMTIgMTcuOTMtNy45MyAzNi0xMS4zNiA1NC0yMy41NiAxMjQuMDgtMjYuMzEgMjM3LjYyLTggMzI4LjM1IDkuNTEgNDcgMjQuNjEgODcuODkgNDQuODkgMTIxLjU3IDIxLjU2IDM1LjggNDguOTMgNjMuNDQgODEuMzQgODIuMTMgMzQuMTUgMTkuNjkgNzQuMzQgMjkuNjcgMTE5LjQ1IDI5LjY3IDYxLjQyIDAgMTMwLjA5LTE4LjIxIDIwNC4xMS01NC4xMyA3Mi41Ni0zNS4yMSAxNDYuNjMtODUuNjQgMjIwLjEzLTE0OS44OSAxMS4zMy05LjkgMjMtMjAuNDkgMzQuNjYtMzEuNTNoMTcuNDF2LTE3NC4zOWwtNi4zNC03LjgtMy0zLjY3LTc5LjgyLTk4LjU1LTQ0LjM1LTU0Ljc1Yy0yMi4zOS0yNy42NC01OC4yNS03OC43OS0xMDEtMTQ0LTM0LTUxLjg0LTU4Ljc2LTkzLjQ3LTcwLjUtMTEzLjYzbC0xLjI4LTIuMjFjLTIwLjQ5LTM1LjMzLTM1LjcxLTYzLjc5LTQ3LjkzLTg2LjY0LTE1LjMtMjguNjMtMzAuMzktNTcuODctNDQuOTEtODdsMi42Ni01LjE3em0tODAuODYtMTcyLjg5Yy0xMy41My0zNC43LTI1LjkyLTY5LjEzLTM3LTEwMi44MSAzNC41Ny03LjEzIDcwLjUxLTEzLjUzIDEwNy4zMi0xOS4xMS0xMi4yOCAyMC4xMS0yNC4zNCA0MC40MS0zNiA2MC42NHMtMjMuMTIgNDAuNjktMzQuMzIgNjEuMjh6bS0zOC4yNSA0NjIuMWMxMS40NS0zNC44NiAyNC4zMS03MC41NiAzOC4zOS0xMDYuNTkgMTEuMjkgMjAuNyAyMi44NyA0MS4zIDM0LjU4IDYxLjUzIDEyLjI3IDIxLjE5IDI1IDQyLjQ4IDM3Ljk1IDYzLjU4LTM4LjQ2LTUuMzItNzUuNjItMTEuNTMtMTEwLjkyLTE4LjUxek03MDcuMTggMzk3LjE2YzktNjEuNzQgMjkuMTQtMTA1Ljg3IDU1LjM3LTEyMS4wNiAxMC44OS02LjMxIDI1LjM0LTkuNSA0Mi45My05LjUgMzguNDcgMCA4OC4yNCAxNS4xIDE0My45MSA0My42NyA2MC4zNCAzMSAxMjUuNzcgNzcuMTEgMTg5LjIyIDEzMy40NXE1LjkgNS4yNCAxMi4wNyAxMC44OWMtNTUuODEgNjEuNzEtMTEwLjgxIDEzMC4yOC0xNjMuNjggMjA0LjEtOTAuMDggOC44LTE3Ni42OCAyMS45NC0yNTcuNzYgMzkuMTEtMi45My0xMi44NC01LjY4LTI1Ljc1LTguMi0zOC41bC0uMjQtMS4zMmMtMTkuMzMtOTguNzYtMjQuMDQtMTg5LTEzLjYyLTI2MC44NHptMTEuMzEgNzI3Yy0zOC4xIDg0LTcwLjQ4IDE2Ny4xNi05Ni4zNyAyNDcuNDYtOS0yLjgtMTcuODktNS43Mi0yNi42NS04LjctMTAzLTM1LjIxLTE4OC43OS04MC42Ni0yNDguMDgtMTMxLjQzLTQ1LjM3LTM4Ljg1LTcyLjQ1LTc5LjgzLTcyLjQ1LTEwOS42MyAwLTMwLjU5IDI3LjA5LTcwIDc0LjM0LTEwOC4yIDU1LTQ0LjQ3IDEzMy4yNy04NS4xMSAyMjYuMTktMTE3LjUgMTUuNzktNS40OCAzMS44Ny0xMC43MyA0OC0xNS42NCAyNS41MyA3OS4xMyA1Ny40OCAxNjAuOTkgOTUuMDEgMjQzLjYzem0uMTIgNDc0LjkyYzIuODYtMTUgNi0zMC4wOSA5LjQzLTQ1LjA5IDgwIDE2LjM3IDE2Ny41OSAyOC43MSAyNjAuNzUgMzYuNzEgNTMuMzggNzQuMzQgMTA4Ljg0IDE0My4zNyAxNjUuMDUgMjA1LjQ0LTYuOTQgNi4zOS0xMy45NCAxMi42OC0yMC45IDE4Ljc5LTgxLjM3IDcxLjEzLTE2My4wOSAxMjIuNTUtMjM2LjI4IDE0OC43MWwtMS41Mi41NGMtMzIuOCAxMS41OC02Mi4wOSAxNy40NS04NyAxNy40NS0xOC4zOCAwLTMzLjIyLTMuMTgtNDQuMTEtOS40Ni0yNi41MS0xNS4yOS00Ny4xNC01OC40Ni01Ni42LTExOC40NS0xMS4wNi02OS45MS03LjE5LTE1Ny45NyAxMS4xNy0yNTQuNjV6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgaWQ9Il9Hcm91cF8iIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgLz4KICA8cGF0aCBkPSJNMjE5NS4wNyAxMjA1LjFxLTU2LjI2LTEwMy40NS0xNjUuNTQtMTM0LjIzYTIuODUgMi44NSAwIDAgMS0xLjc5LTIuODUgMyAzIDAgMCAxIDEuMzctMi42OGM1NC4yNC0zMC4xNiA5NS45My03My4xMSAxMjUuMTUtMTI3LjlxNDQuMTUtODIuODkgNDQuMTYtMTk5LjQ5YzAtMTI4LjI1LTMyLjQ1LTIyMy42NS05Ny4wNi0yODcuMTFzLTE1MC42Mi05NS0yNTcuNy05NWgtNTc4LjM1Yy0xLjI1IDAtMi4yNyAxLjMxLTIuMjcgMi45M1YxODk0LjNjMCAxLjYyIDEgMi45MyAyLjI3IDIuOTNoNTQ2LjU3cTExNS40MiAwIDE5OS4xMS0zMy42OWM1NS45MS0yMi40MiAxMDEuNC01Mi42OCAxMzcuMjEtOTAuNjhzNjEuOTItODMuMzMgNzguNjYtMTM2YzE2Ljc0LTUyLjIzIDI1LjEtMTA4LjggMjUuMS0xNjkuMjQuMDQtMTA1LjM3LTE5LjA4LTE5Mi41Ny01Ni44OS0yNjIuNTJ6bS03MjIuMzItNjI4YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDMzOS40NmM1Ni45NSAwIDEwMC41MSAxNiAxMzAuNjUgNDcuNTVzNDUuMiA4Ni40IDQ1LjIgMTY0LjE4YzAgNjkuMTgtMTYuNzQgMTIxLjkyLTUwLjI1IDE1OS4wOHMtNzUuMzcgNTUuMzItMTI1LjYzIDU1LjMySDE0NzVjLTEuMjUgMC0yLjI3LTEuMzEtMi4yNy0yLjkzem01MTguMTYgMTAzNS44Yy0zNC44NiA0Mi43Ni04NC40MSA2NC0xNDguMDcgNjRIMTQ3NWMtMS4yNSAwLTIuMjctMS4zMS0yLjI3LTIuOTN2LTQ3Ni40YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDM2Ny44MmM2My42NiAwIDExMi41NyAxOS44OSAxNDguMDcgNjEuMzVzNTIuOTMgOTkuODIgNTIuOTMgMTc2LjNjLjAyIDc3Ljc3LTE3Ljc2IDEzOC4yNy01Mi45MSAxODAuNjF6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgLz48L3N2Zz4K" width="150px"></a>
    </td>
    <td align="center">
      <a href="https://vitejs.dev/"><img src="https://vitejs.dev/logo.svg" width="150px"></a>
    </td>
    <td align="center">
      <a href="https://code.visualstudio.com/"><img src="data:image/png;base64,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" width="150px"> </a>
    </td>
    <td align="center">
      <a href="https://pt-br.reactjs.org/"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="150px"></a>
    </td>
  </tr>
    </span>
 </table>

## Desenvolvimento
Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```
cd "diretorio de sua preferencia"
git clone https://github.com/marqvin/Integrador-Frontend.git
```
## Construção

Para executar o projeto, será necessário apenas usar o comando no terminal do projeto:

    npm install

Para rodar o projeto localmente, execute o comando abaixo:
```
npm run dev
```
No terminal aparecerá algo como:
<img src=".\src\images\localmente.png">
Agora use ```Ctrl + click``` sobre a linha azul e esse comando abrirá uma janela em seu navegador


## Features

O projeto pode ser usado como modelo de FrontEnd para E-commerce no desenvolvimento de cadastro, edição e exclusão de produtos.


## Configuração
Para executar o projeto, é necessário utilizar o VSCode, para que o mesmo identifique as dependências necessárias...

## Contribuições
Contribuições são sempre bem-vindas! Para contribuir lembre-se sempre de adicionar testes unitários para as novas classes com a devida documentação.

##Links
Se você precisar adicionar links extras relativos ao projeto em questão, esse é o tópico para isso. No nosso caso, vamos adicionar o endereço do post que deu origem ao projeto.


## 📌O que foi feito aqui?

- A base do projeto é feita em REACT para comunicação com o API.


## Colaboradores ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center"><a href="https://github.com/marqvin"><img src="https://avatars.githubusercontent.com/u/58312849?s=400&u=a2e483841e34a267f6dd2f25ab3e6b9b019b368e&v=4" width="100px;" alt="Vinícius Marques"/><br /><sub><b>Vinícius Marques</b></sub></a><br />
    </td>
    <td align="center"><a href="https://github.com/jbsoares"><img src="https://avatars.githubusercontent.com/u/44385434?v=4" width="100px;" alt="Jade"/><br /><sub><b>Jade</b></sub></a><br />
    </td>
    <td align="center"><a href="https://github.com/JeffersonMendes32"><img src="https://avatars.githubusercontent.com/u/99696674?v=4" width="100px;" alt="Jefferson Mendes"/><br /><sub><b>Jefferson Mendes</b></sub></a><br />
    </td>
    <td align="center"><a href="https://github.com/spark2617"><img src="https://avatars.githubusercontent.com/u/99609730?v=4" width="100px;" alt="Jhonatan Souza"/><br /><sub><b>Jhonatan Souza</b></sub></a><br />
    </td>
    <td align="center"><a href="https://github.com/devrsantos"><img src="https://avatars.githubusercontent.com/u/26532182?v=4" width="100px;" alt="Renan Augusto"/><br /><sub><b>Renan Augusto</b></sub></a><br />
    </td>
    <td align="center"><a href="https://github.com/Aristimunho"><img src="https://avatars.githubusercontent.com/u/92954038?v=4" width="100px;" alt="Abraão"/><br /><sub><b>Abraão</b></sub></a><br />
    </td>
  </tr>
</table>
</br>
<p>
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

## Agradecimentos

<table>
  <tr>
    <td>
      <a href="https://www.digitalhouse.com/br"><img src="https://user-images.githubusercontent.com/58312849/190568705-fad12b35-3cad-4836-85ee-e1dedc2256e7.png" width="120"/></a>
    </td>
    <td align="center"><a href="https://github.com/wssantanna"><img src="https://avatars.githubusercontent.com/u/10561227?v=4" width="100px;" alt="Willian Sant' Anna"/><br /><sub><b>Willian Sant' Anna</b></sub></a><br />
    </td>
  </tr>
</table>
Obrigado por nos ensinar que somos mais inteligentes do que pensavamos e que não há problema
em falhar, contanto que nos levantemos e tentarmos novamente. Obrigado por acreditarem em nós.

