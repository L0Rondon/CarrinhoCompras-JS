let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarregarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  const items = document.getElementById("carrinho-items");
  const total = document.getElementById("carrinho-total");
  const count = document.getElementById("carrinho-count");

  items.innerHTML = "";
  let totalValue = 0;
  let totalItems = 0;

  carrinho.forEach(({ id, name, preco, qtd }) => {
    totalValue += preco * qtd;
    totalItems += quantidade;

    const li = document.createElement("td");
    li.innerHTML = `
      ${name} - R$ ${price.toFixed(2)} x ${qtd}
      <br><button onclick="removeFromCart(${id})">Remover</button>
    `;
    items.appendChild(li);
  });

  total.textContent = totalValue.toFixed(2);
  count.textContent = totalItems;
}

function adicionarAoCarrinho(id, name, preco) {
  const item = carrinho.find(p => p.id === id);
  if (item) item.qtd++;
  else cart.push({ id, name, preco, qtd: 1 });
  salvarCarregarCarrinho();
}

function removerDoCarrinho(id) {
  cart = cart.filter(p => p.id !== id);
  salvarCarregarCarrinho();
}

function esvaziarCarrinho() {
  cart = [];
  salvarCarregarCarrinho();
}

// Inicializa ao carregar a página
salvarCarregarCarrinho();

