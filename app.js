let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value;

  if(nomeAmigo.trim() === "") {
    alert("Por favor, insira um nome.");
        return;
  }

  amigos.push(nomeAmigo);

  document.getElementById("amigo").value = "";
  exibirAmigos();
}


function exibirAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  listaAmigos.value = "";
}
