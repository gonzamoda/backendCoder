const socket = io();

const saveProduct = (title, price, thumbnail) => {
  socket.emit("clientNewProduct", {
    title,
    price,
    thumbnail,
  });
};

socket.on("serverNewProduct", addProduct);

socket.on("serverLoadProducts", loadProducts);

const saveChat = (email, mensaje) => {
  socket.emit("clientNewChat", {
    email,
    mensaje,
  });
};

socket.on("serverNewChat", addChat);

socket.on("serverLoadChats", loadChats);
