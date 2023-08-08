const button = document.querySelector(".add")
const valueInput = document.querySelector(".input-tasks")
const listaTask = document.querySelector(".list-tasks")


let arrayTasksItens = [] //Essa linha cria uma variável chamada minhaListaDeItens que é uma array vazia.
                        // Essa array será usada para armazenar as tarefas que o usuário adicionar.


function addItem() { //Função para adicionar uma nova tarefa:

    arrayTasksItens.push({
        tarefa: valueInput.value, // Texto de Tarefa
        concluida: false // Estado de conclusão da tarefa (inicialmente, false)
    })

    valueInput.value = " " // Limpando o campo de entrada

    mostrarNaTela() // Atualizando a lista de tarefas exibida no DOM
    
  




}
function mostrarNaTela() { //Função para mostrar as tarefas na lista:

    let newList = " " // Variável para armazenar o HTML das tarefas

    // Iterando sobre cada tarefa na array minhaListaDeItens
    arrayTasksItens.forEach((element, position) => {

        // Montando o HTML da tarefa usando template literals
        newList = newList +
            ` <li class="tasks ${element.concluida && "done"}   "> 
                                   <img class="concluded" onclick=" tasksConcuided(${position})" src="./assets/checked.png">
                                       <p>${element.tarefa}</p>
                                 <img class="dell" src="./assets/trash.png" onclick="deletarItem(${position})">     
                              </li> `

    });


    listaTask.innerHTML = newList // Atualizando a lista completa no DOM

    // Salvando a lista de tarefas no LocalStorage para persistência dos dados
    localStorage.setItem("lista", JSON.stringify(arrayTasksItens))

    




}                                                                                     // agora é o proximo passo é mostrar esses itens na tela 39:40m - PASSO CONCUÍDO. 27/07 - 18:00
// Agora o proximo passo é dar concluido na tareda e deletar a tarefa
// Funções para concluir e deletar tarefas:
function tasksConcuided(position) {
    arrayTasksItens[position].concluida = !arrayTasksItens[position].concluida // Invertendo o estado de conclusão da tarefa

    mostrarNaTela() // Atualizando a lista de tarefas exibida no DOM

}


function deletarItem(position) {
    arrayTasksItens.splice(position, 1)  // Removendo a Tarefa da array
    mostrarNaTela()// Atualizando a lista de tarefas exibida no DOM
}

// Função para recarregar tarefas do LocalStorage:
function recarregarTarefas() {
    const tarefasDoLocalStorege = localStorage.getItem("lista") // Obtendo as tarefas salvas no LocalStorage

    if(tarefasDoLocalStorege){

    arrayTasksItens = JSON.parse(tarefasDoLocalStorege) // Recuperando as tarefas salvas no LocalStorage
    }

    


    mostrarNaTela()// Atualizando a lista de tarefas exibida no DOM



}

recarregarTarefas() // Chamando a função para recarregar as tarefas ao carregar a página
button.addEventListener("click", addItem)


// Agora o Proximo passo é salva as informações JSON - 1:03:15






