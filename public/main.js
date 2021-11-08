const productForm = document.getElementById("productForm");
const title = document.getElementById("inputTitle");
const price = document.getElementById("inputPrice");
const thumbnail = document.getElementById("inputThumbnail");

const inputMail = document.getElementById("inputMail");
const inputChat = document.getElementById("inputChat");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  saveProduct(title.value, price.value, thumbnail.value);
});

chatButton.addEventListener("click", () => {
  saveChat(inputMail.value, inputChat.value);
});
