
const cart = document.querySelector('.cart');


const cartIcon = document.querySelector('#icon-car');


const closeButton = document.querySelector('#cart-fechar');


cartIcon.addEventListener('click', () => {
  cart.style.display = 'block'; 
});


closeButton.addEventListener('click', () => {
  cart.style.display = 'none';
});
cartIcon.addEventListener('click', () => {
    cart.classList.add('show');
    cart.classList.remove('hide');
  });
  
  closeButton.addEventListener('click', () => {
    cart.classList.add('hide');
    cart.classList.remove('show');
  });
  const addButtons = document.querySelectorAll('.add');

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemId = button.dataset.itemId;
    addItemToCart(itemId);
  });
});

function addItemToCart(itemId) {
  const cartLista = document.querySelector('.cart-lista');

  
  const existingItem = cartLista.querySelector(`[data-item-id="${itemId}"]`);
  if (existingItem) {
      
      const quantidadeElement = existingItem.querySelector('.quantidade span:nth-child(2)');
      let quantidade = parseInt(quantidadeElement.textContent);
      quantidade++;
      quantidadeElement.textContent = quantidade;
  } else {
     
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.dataset.itemId = itemId;

      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      const image = document.createElement('img');
      image.src = 'https://atomy-shopping.s3.ap-northeast-2.amazonaws.com/br/Q00217/thumb1.jpg';
      image.alt = '';
      imageDiv.appendChild(image);
      newItem.appendChild(imageDiv);

      const nome = document.createElement('div');
      nome.classList.add('nome');
      nome.textContent = 'Cellactive Tonico';
      newItem.appendChild(nome);

      const total = document.createElement('div');
      total.classList.add('total');
      total.textContent = 'R$270';
      newItem.appendChild(total);

      const quantidadeDiv = document.createElement('div');
      quantidadeDiv.classList.add('quantidade');
      const spanMi = document.createElement('span');
      spanMi.classList.add('mi');
      spanMi.textContent = '<';
      quantidadeDiv.appendChild(spanMi);
      const spanQuantidade = document.createElement('span');
      spanQuantidade.textContent = '1';
      quantidadeDiv.appendChild(spanQuantidade);
      const spanPl = document.createElement('span');
      spanPl.classList.add('pl');
      spanPl.textContent = '>';
      quantidadeDiv.appendChild(spanPl);
      newItem.appendChild(quantidadeDiv);

      cartLista.appendChild(newItem);
  }
}
