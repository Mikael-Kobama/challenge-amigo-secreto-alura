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

  for(let amigo of amigos) {
    const li = document.createElement("li")
    li.textContent = amigo;
    const listaAmigos = document.getElementById("listaAmigos");
  }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
}
