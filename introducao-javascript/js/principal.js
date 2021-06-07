const titulo = document.querySelector(".titulo");
titulo.textContent = "Laura Takeda // Nutrição";

const pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
  let paciente =  pacientes[i];

const info_peso = paciente.querySelector(".info-peso");
const peso = info_peso.textContent;

const info_altura = paciente.querySelector(".info-altura");
const altura = info_altura.textContent;

const info_imc= paciente.querySelector(".info-imc");

pesoValido = true;
alturaValida = true;

if (peso <=0 || peso >=1000){
  console.log("Peso inválido");
  pesoValido = false;
  info_imc.textContent = "Peso invalido";
}
if (altura <=0 || altura >=3.00){
  console.log("Altura inválida");
  alturaValida = false;
  info_imc.textContent = "Altura inválida";
}

if (alturaValida && pesoValido){
  const imc = peso / (altura * altura);
  info_imc.textContent = imc.toFixed(2);
  
}

}



console.log(imc)



/*Nome, peso, altura, gordura imc */