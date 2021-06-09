const titulo = document.querySelector(".titulo");
titulo.textContent = "Laura Takeda // Nutrição";

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  const info_peso = paciente.querySelector(".info-peso");
  const peso = info_peso.textContent;

  const info_altura = paciente.querySelector(".info-altura");
  const altura = info_altura.textContent;

  const info_imc = paciente.querySelector(".info-imc");

  const pesoValido = validaPeso(peso);
  const alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido");
    pesoValido = false;
    info_imc.textContent = "Peso invalido";
    paciente.classList.add("paciente-invalido");
  }
  if (!alturaValida) {
    console.log("Altura inválida");
    alturaValida = false;
    info_imc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }
}

function validaPeso() {
  if (peso >= 0 && peso <= 800) {
    return true;
  } else {
    return false;
  }
}
function validaAltura() {
  if (altura >= 0.3 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

/*Nome, peso, altura, gordura imc */
