/* 
Descricao :
  O arquivo adiciona e remover livros da biblioteca.
Aluno :
  Cristiano Rodrigues de Oliveira Neto
Data :
  11 / julho / 2021
*/


function checkEmptyList() {
  if (!document.querySelector('ul').childNodes.length) {
    document.querySelector('ul').innerHTML = 'Adicione um livro abaixo!';
  }
}
checkEmptyList()

const save = document.querySelector("#save");

const titulo = document.querySelector("#titulo");
const autor = document.querySelector("#autor");
const link = document.querySelector("#link");
const ulElement = document.querySelector("#listaLivros");


//Botão Salvar
save.addEventListener("click", function (e) {
  e.preventDefault();

  if (titulo.value || autor.value || link.value) {

    const liElement = document.createElement("li");
    liElement.innerHTML = `<span>${titulo.value + " - " + autor.value}</span>`

    btnDelete = document.querySelector("#delete");

    //Botão deletar
    liElement.appendChild(btnDelete);
    btnDelete.onclick = () => {
      ulElement.removeChild(liElement)
    }


    ulElement.appendChild(liElement)
    titulo.value = "";
    autor.value = "";
    link.value = "";
  }
});





