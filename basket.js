const goods = [
    { title: "PS5", price: 30000, id: 1},
    { title: "IPhone 12", price: 100000, id: 2},
  ];
  
const main = () => {
  const createCartItemTemplate = ({
    title,
    price,
    id,
  }) => `<div class="cart_item">
            <img src="..img/item${id}.jpg" alt="product">
            <div class="cart_descr">
                <div class="cart_title">${title}</div>
                < class="cart_price">1 x $${price}</>
            </div>
            <button class="fas fa-times-circle"></button>
            <hr>
          </div>`;
  
  const renderCartGoods = (items) => {
    const goodsItemsList = items
      .map((item) => createCartItemTemplate(item))
      // .join("");
      // console.log(goodsItemsList);
      document.querySelector(".cart_items").innerHTML = goodsItemsList;
  };
  
  renderCartGoods(goods);
};
window.addEventListener("load", main);