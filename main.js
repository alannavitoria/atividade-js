//TIPOS DE VARIAVEIS
//let a = 5 //escopo local, é utilizada em certas funções
//var b = 6 //escopo global, é utilizada no programa geral, utilizada em qualquer lugar
//const c = 7 //é uma váriavel que não muda, é constante

/*var a = 5
var b = 7

function soma (x,y){
    return(x+y)
}

console.log(soma(a,b))*/

//aero font forma mais agradavel de escrever uma função
/*console.log(soma(a,b))

const soma = (a,b) => a+b*/

//manipulação de array
/*var k = [1,2,3,4]

console.log(k)
console.log(k.length)*/

/*console.log(k[1])*/

//adicionar algo mais na array
/*k.push(5)
console.log(k)
console.log(k.length)*/

//exluir algo do array
/*k.pop()
k.pop()
console.log(k)
console.log(k.length)*/

//json significa classe
/*function Pessoa(a,b){
    this.nome = a
    this.idade = b
}

var x = new Pessoa ("Afonso", 31)
var y = new Pessoa ("Teste", 20)
console.log(x)
console.log(y)*/

/*function Carro(a,b,c,d,e){
    this.nome = a
    this.ano = b
    this.cor = c
    this.modelo = d
    this.popular = e 
}

var c1 = new Carro ("Impala", 1967, "Preto", "Impala 4", true)
console.log(c1)*/

/*t= [1,2,3,4]

t.forEach(b => {
    if((b%2)===0){
        console.log(b, 'é par')
    }
    else{
        console.log(b, 'é impar')
    }
});*/

//percorer os elementos de uma array, loop

//ARAY DE OBJETOS

/* a = [
    {nome:"Fulaninho", idade: 21},
    {nome:"Beltraninho", idaide: 30}
 ]

 console.log(a)*/

 //ATIVIDADE

 ob = []

 function Aluno(a,b,c){
    this.nome = a
    this.rgm = b
    this.curso = c
 }

 var a1 = new Aluno ("Marquinhos", 12574, "ADS")
 var a2 = new Aluno ("Juninho", 45689, "Biologia")
 var a3 = new Aluno ("Jobson", 54859, "Quimica")

ob.push(a1)
ob.push(a2)
ob.push(a3)

ob.forEach(curso => {
    if(curso.curso === "ADS"){
        console.log(curso, "Fera demais")
    }
    else{
        console.log(curso, 'Apenas um menino')
    }
});
