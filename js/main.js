//? let product = document.getElementById("product");
// let category = document.getElementById("category");
// let price = document.getElementById("price");
// let delivery = document.getElementById("delivery");

// console.log(product);

// product.addEventListener("change", () => {
//   localStorage.setItem("Продукт", JSON.stringify(product.value));
//   // let data = JSON.parse(localStorage.getItem("Продукт"));
// });
// product.value = JSON.parse(localStorage.getItem("Продукт"));

// category.addEventListener("change", () => {
//   localStorage.setItem("Категория", JSON.stringify(category.value));
//   // let data = JSON.parse(localStorage.getItem("Продукт"));
// });
// category.value = JSON.parse(localStorage.getItem("Категория"));

// price.addEventListener("change", () => {
//   localStorage.setItem("Стоимость", JSON.stringify(price.value));
//   // let data = JSON.parse(localStorage.getItem("Продукт"));
// });
// price.value = JSON.parse(localStorage.getItem("Стоимость"));

// delivery.addEventListener("change", () => {
//   localStorage.setItem("Доставка", JSON.stringify(delivery.value));
//   // let data = JSON.parse(localStorage.getItem("Продукт"));
// });
// delivery.value = JSON.parse(localStorage.getItem("Доставка"));

// btn.addEventListener("click", () => {
//   let objInfo = {
//     product: product.value,
//     category: category.value,
//     price: price.value,
//     delivery: delivery.value,
//   };
//   info(objInfo);
// });

// function info(obj) {
//   localStorage.setItem("info", JSON.stringify(obj));
//   let infor = JSON.parse(localStorage.getItem("info"));
//? }

let form = document.createElement("div");
form.style.width = "200px";
form.style.height = "180px";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.justifyContent = "space-evenly";
// form.style.border = "1px solid black";
document.body.append(form);

let inpName = document.createElement("input");
inpName.setAttribute("type", "text");
inpName.setAttribute("placeholder", "Enter your name");

let mail = document.createElement("input");
mail.setAttribute("type", "email");
mail.setAttribute("placeholder", "Enter your email");

let message = document.createElement("input");
message.setAttribute("type", "text");
message.setAttribute("placeholder", "Enter your message");

let btn1 = document.createElement("button");
btn1.innerText = "Send";

let btn2 = document.createElement("button");
btn2.innerText = "Clear";

form.append(inpName, mail, message, btn1, btn2);

let read = document.getElementById("messageBlock");
read.style.textAlign = "center";
console.log(read);

btn1.addEventListener("click", () => {
  if (!localStorage.getItem("info")) {
    localStorage.setItem("info", "[]");
  }
  let info = {
    name: inpName.value,
    email: mail.value,
    message: message.value,
  };
  let infor = JSON.parse(localStorage.getItem("info"));
  infor.push(info);
  localStorage.setItem("info", JSON.stringify(infor));

  let h1Name = document.createElement("h1");
  h1Name.innerText = inpName.value;
  let h2Email = document.createElement("h2");
  h2Email.innerText = mail.value;
  let span = document.createElement("span");
  span.innerText = message.value;
  read.append(h1Name, h2Email, span);
});

btn2.addEventListener("click", () => {
  inpName.value = "";
  mail.value = "";
  message.value = "";
});
