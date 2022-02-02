console.log('** Como vender no Ifood **');

//Variavel = let - não é legal começãr com numero ou simbolos 
//o "=" serve para atribuir novos valores 
//para guardar varios informações uso o objeto "{"
// Array é o "["
// dentro do objeto eu coloco o nome do campo dois pontos e o valor
//pra numero não precisa de aspas, pra string sim
let cursos = [{
    id: 1,
    titulo: 'Ifood para iniciantes',
    descricao: 'Esse curso é pra quem acabou de começar no Ifood',
    professor: 'MR SARTO',
    // não posso usar espaço 
    // como a lista de aulas é "maleavel" eu criei outra array 
    listaAulas: []
//vou abrir o segundo objeto com "{" para adicionar um novo curso
}, {
    id: 2,
    titulo: 'Ifood para Intermediarios',
    descricao: 'Esse curso é pra quem quer aumentar seus ganhos no ifood',
    professor: 'MR Conselheiro',
    listaAulas: []

}];

//agora eu vou criar a função para conseguir listar esses dois cursos (exibir eles no console)
// começo criando função com o "function"
// toda vez que eu quero declarar uma função eu uso o "function"
// abro e fecho o "(" para indicar que é um função e 
//para receber o parametro (nesse caso não vamso receber)
//dentro da function eu executo essa função
//para percorrer a array eu uso o for esse 0 no let index e para mostar aonde vai começar a contagem
//array.lenght é para dizer quanto itens tem na lista
//index++ para incrementar a variavel
// como o nome da minha array é cursos eu coloco esse nome no for
// nesse casso eu uso o "index" no console log para ele achar um por vez
function listarCursos(){
    for (let index = 0; index < cursos.length; index++) {
        //console.log("Titulo: " + cursos[index].titulo);

        //abaixo exemplo de um Template String
        // da pra juntar texto com variavel e pulas linhas
        // assim ele imprime sempre o mesmo texto mas com algumas variaveis 
        console.log(`
        Titulo: ${cursos[index].titulo}
        Descrição: ${cursos[index].descricao}
        Professor: ${cursos[index].professor}
        N. de Aulas: ${cursos[index].listaAulas.length}
        `);
    }
    
}
//eu to declarando a função mas ainda não estou chamando ela
//então ela nao aparece no terminal
// ai uso o nome da função que no caso é "listarcursos" para chamar a função
listarCursos();

//para imprimir somente os titulos dos cursos e não os textos eu uso o console log da for (linha 40)
// e escolho o valor que quero que seja declarado, no caso é o titulo
//ai usando o titulo ele "chama" o "ifood para iniciantes" e "ifood para intemdiarios" que é o titulo

//contatenar é para juntar as informações, uma forma de fazer é mostrada na linha 44

//agora vou criar a função para adicionar aula
//vão ser duas informações na mesma função, a primeira é o id do curso que vamos modificar e o link da aula que vamos adicionar
//idCurso = número, linkAula = string

//function adicionarAula (idCurso, linkAula) {
      //findIndex retorna a posição do array do curso encontrado.
//let cursoEncontrado = cursos.findIndex((curso) => {
    //return cursos.id ==idCurso; 
    //});
    //console.log(crusos[cursoEncontrado]);
//}
//adicionarAula(2, "https//google.com");

//acima eu usei o findIndex, vou comentar e abaixo vou usar o for

function adicionarAula (idCurso, linkAula) {
//abaixo eu estou encontrando a posição do curso
    let indexCurso = null;

    for (let i = 0; i < cursos.length; i++) {
      if(cursos[i].id==idCurso){
          indexCurso = i;
      }
    }
    //agora eu vou adicionar uma nova aula ao curso selecionado
    cursos[indexCurso].listaAulas.push(linkAula);
    console.log (`Aula adicionada ao curso ${cursos[indexCurso].titulo}!`);
}

adicionarAula(2, 'https://youtube.com');
listarCursos();



