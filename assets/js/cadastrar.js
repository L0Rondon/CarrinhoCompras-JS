function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const valor = parseFloat(document.getElementById("valor").value);
  
    if (!codigo || !nome || isNaN(quantidade) || isNaN(valor)) {
      alert("Preencha todos os campos corretamente.");
      return;
    }
  
    const produto = {
      nome,
      quantidade,
      valor,
      total: quantidade * valor,
    };
  
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
  }
  
  function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const tbody = document.querySelector("#carrinho tbody");
    tbody.innerHTML = "";
  
    carrinho.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.codigo}</td>
          <td>${item.nome}</td>
          <td>${item.quantidade}</td>
          <td>R$ ${item.valor.toFixed(2)}</td>
          <td>R$ ${item.total.toFixed(2)}</td>
        `;
      tbody.appendChild(row);
    });
  
    window.onbeforeunload = function (e) {
      document.getElementById("obrigado").style.display = "block";
      return "Tem a certeza que quer fechar a janela?";
    };
  }