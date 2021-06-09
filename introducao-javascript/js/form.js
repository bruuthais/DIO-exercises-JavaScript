const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  const form = document.querySelector("#form-add");
  /* Extraindo informações do form*/

  const paciente = obtemPacienteDoFormulario(form);

  const pacienteTr = montaTr(paciente);
  /* utilizando a table e colocando o tr e o td */
  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  console.log(pacienteTr);
});

function obtemPacienteDoFormulario(form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  /*Criando os os elementos tr e td*/
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  /*Definindo os texto do conteúdo de cada td
elemento.textodele = variavel com o value*/

  /*Colocando os tds como filhos do tr*/

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
