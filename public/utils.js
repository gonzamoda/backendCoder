const productsTable = document.getElementById("listadoProductos");

const contenedorChat = document.getElementById("contenedorChat");

const addProduct = (data) => {
  productsTable.innerHTML += `                
          <tr>
            <th>${data.id}</th>
            <td id="tdTitle">${data.title}</td>
            <td id="tdPrice">${data.price}</td>
            <td><img id="tdImg" width="50" src="${data.thumbnail}" alt="${data.title}" /></td>
          </tr>   
                    `;
};

const loadProducts = (products) => {
  products.forEach((product) => addProduct(product));
};

const addChat = (data) => {
  contenedorChat.innerHTML += `
  <div class="container-fluid">
  <div class="row">
    <div class="col">
      <span style="color:blue"><b>${data.email}</b></span>
    </div>
    <div class="col">
      <span style="color:brown">${data.hora}</span>
    </div>
    <div class="col">
      <span style="color:green"><i>${data.mensaje}</i></span>
    </div>
  </div>
</div>
  `;
};

const loadChats = (mensajes) => {
  mensajes.forEach((mensaje) => addChat(mensaje));
};
