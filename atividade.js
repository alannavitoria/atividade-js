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
